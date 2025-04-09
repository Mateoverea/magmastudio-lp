import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Si es entorno de preview (Vercel), no metemos headers ni optimizaciones
  if (process.env.VERCEL_ENV === 'preview') {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // Detectar si es mobile para pasar como header (útil para optimizaciones client-side)
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  response.headers.set('x-device-type', isMobile ? 'mobile' : 'desktop');

  // Cache a largo plazo para recursos inmutables
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');

  // Header para medir tiempos desde edge/CDN
  response.headers.set('Server-Timing', 'cdn-cache;desc=HIT, edge;dur=13');

  // Solo aplicar CSP si estamos en producción
  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vercel.app; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: *.sanity.io; font-src 'self' data:; connect-src 'self' *.sanity.io; frame-src 'self';"
    );
  }

  // Preloads (si quisiera meter assets críticos después)
  const existingLinkHeader = response.headers.get('Link') || '';
  response.headers.set('Link', existingLinkHeader);

  return response;
}

// Middleware solo aplica en rutas importantes, evitamos estáticos, imágenes, APIs, etc.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images|public|api|studio|robots.txt|_vercel|_lighthouse).*)',
  ],
};
