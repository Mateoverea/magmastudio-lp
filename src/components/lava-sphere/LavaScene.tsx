'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import LavaMesh from '@/components/lava-sphere/LavaMesh';
import { useMediaQuery } from 'usehooks-ts';

const LavaScene = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) document.body.classList.remove('loading');
  }, [isLoaded]);

  return (
    <div className="absolute md:relative inset-0 w-full h-full pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 4], fov: 45 }} 
        gl={{ alpha: true }}
        style={{ background: 'transparent' }}
        frameloop="always"
        onCreated={({ gl }) => {
          gl.setSize(isMobile ? window.innerWidth : window.innerWidth / 2, window.innerHeight);
          gl.setPixelRatio(window.devicePixelRatio);
        }}
      >
        <Suspense fallback={null}>
          <LavaMesh isMobile={isMobile} onLoaded={() => setIsLoaded(true)} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default LavaScene;
