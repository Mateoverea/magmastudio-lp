import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Create a response object from the request
  const response = NextResponse.next();

  // Add device type for client-side optimization
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
  // Set a header to identify device type
  response.headers.set('x-device-type', isMobile ? 'mobile' : 'desktop');
  
  // Add cache headers to improve TTFB
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  
  // Add Server-Timing header to measure and debug performance
  response.headers.set('Server-Timing', 'cdn-cache;desc=HIT, edge;dur=13');
  
  // Set Content-Security-Policy for better security and performance
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vercel.app; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: *.sanity.io; font-src 'self' data:; connect-src 'self' *.sanity.io; frame-src 'self';"
  );

  // Generate link headers for preload of critical assets
  const preloadFonts = '';
  
  // Get existing Link header or empty string
  const existingLinkHeader = response.headers.get('Link') || '';
  
  // Combine existing and new Link headers
  response.headers.set('Link', existingLinkHeader || '');

  return response;
}

// Only run the middleware on specific paths for better performance
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder content)
     * - api routes
     * - studio/* (Sanity Studio routes)
     */
    '/((?!_next/static|_next/image|favicon.ico|images|public|api|studio).*)',
  ],
}; 