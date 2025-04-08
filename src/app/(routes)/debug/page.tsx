'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';
import LavaMesh from '@/components/lava-sphere/LavaMesh';
import { useMediaQuery } from 'usehooks-ts';

export default function DebugPage() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <div className="w-screen h-screen bg-black">
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 45 }} 
        gl={{ alpha: false }}
        frameloop="always"
        onCreated={({ gl }) => {
          // Only set size in debug mode
          gl.setSize(window.innerWidth, window.innerHeight);
          gl.setPixelRatio(window.devicePixelRatio);
        }}
      >
        <Suspense fallback={null}>
          <LavaMesh isMobile={isMobile} onLoaded={() => console.log('🔥 LavaMesh loaded')} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={true} />
      </Canvas>
    </div>
  );
}

