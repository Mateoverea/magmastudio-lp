'use client';

import React, { useEffect, useState, useRef, Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { useMediaQuery } from 'usehooks-ts';
import LavaMesh from './LavaMesh';

const LavaSphere = () => {
  const isTablet = useMediaQuery('(max-width: 1199px)');
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoaded) document.body.classList.remove('loading');
  }, [isLoaded]);

  // This effect targets all canvas elements inside our component
  useEffect(() => {
    // Completely prevent wheel events on the canvas
    const preventWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Find all canvas elements inside our container
    const canvasElements = containerRef.current?.querySelectorAll('canvas');
    if (canvasElements && canvasElements.length > 0) {
      canvasElements.forEach(canvas => {
        // Add wheel event listener with passive: false to allow preventDefault
        canvas.addEventListener('wheel', preventWheel, { passive: false });
        // Also disable pointer events via CSS
        canvas.style.pointerEvents = 'none';
      });
    }

    return () => {
      const canvasElements = containerRef.current?.querySelectorAll('canvas');
      if (canvasElements && canvasElements.length > 0) {
        canvasElements.forEach(canvas => {
          canvas.removeEventListener('wheel', preventWheel);
        });
      }
    };
  }, [isLoaded]); // Re-run when loaded changes to ensure canvas exists

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: false }}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0,
          touchAction: 'none', // Prevent touch actions
          WebkitUserSelect: 'none', // Prevent selection
          userSelect: 'none'
        }}
        frameloop="demand"
        onCreated={({ gl, events, size }) => {
          // Disable Three.js built-in event handlers completely
          if (events) {
            events.enabled = false;
            // Important: disconnect all event listeners
            events.disconnect?.();
          }
          
          gl.setSize(window.innerWidth, window.innerHeight);
          gl.setPixelRatio(window.devicePixelRatio);
          
          // Find the renderer's domElement (canvas) and apply additional settings
          const canvas = gl.domElement;
          if (canvas) {
            canvas.style.pointerEvents = 'none';
            canvas.style.touchAction = 'none';
            canvas.addEventListener('wheel', e => {
              e.preventDefault();
              e.stopPropagation();
            }, { passive: false });
          }
        }}
      >
        <Suspense fallback={null}>
          <LavaMesh isMobile={isMobile} onLoaded={() => setIsLoaded(true)} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LavaSphere;
