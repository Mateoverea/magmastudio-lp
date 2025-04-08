'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  Color,
  IcosahedronGeometry,
  MeshDepthMaterial,
  MeshPhysicalMaterial,
  RGBADepthPacking,
} from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import CustomShaderMaterial from 'three-custom-shader-material';

// Shaders
import vertexShader from './shaders/vertex.glsl';
import fragmentShader from './shaders/fragment.glsl';

type Props = {
  isMobile: boolean;
  onLoaded: () => void;
};

const LavaMesh = ({ isMobile, onLoaded }: Props) => {
  const materialRef = useRef<any>(null);
  const depthMaterialRef = useRef<any>(null);

  const shaderParams = {
    color: '#ff6c00',
    gradientStrength: 1.0,
    speed: 3.0,
    noiseStrength: 0.3,
    displacementStrength: 1.0,
    fractAmount: 2.2,
    roughness: 0.5,
    metalness: 0.0,
    clearcoat: 0.0,
    reflectivity: 0.3,
    ior: 1.3,
    iridescence: 0.5,
  };

  const geometry = useMemo(() => {
    const geo = mergeVertices(new IcosahedronGeometry(1.3, 200));
    geo.computeTangents();
    return geo;
  }, []);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: new Color(shaderParams.color) },
    uGradientStrength: { value: shaderParams.gradientStrength },
    uSpeed: { value: shaderParams.speed },
    uNoiseStrength: { value: shaderParams.noiseStrength },
    uDisplacementStrength: { value: shaderParams.displacementStrength },
    uFractAmount: { value: shaderParams.fractAmount },
  }), []);

  // 🌀 Animación y actualización de uniforms
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (materialRef.current) {
      const u = materialRef.current.uniforms;
      u.uTime.value = t;
      u.uColor.value.set(shaderParams.color);
      u.uGradientStrength.value = shaderParams.gradientStrength;
      u.uSpeed.value = shaderParams.speed;
      u.uNoiseStrength.value = shaderParams.noiseStrength;
      u.uDisplacementStrength.value = shaderParams.displacementStrength;
      u.uFractAmount.value = shaderParams.fractAmount;

      materialRef.current.roughness = shaderParams.roughness;
      materialRef.current.metalness = shaderParams.metalness;
      materialRef.current.clearcoat = shaderParams.clearcoat;
      materialRef.current.reflectivity = shaderParams.reflectivity;
      materialRef.current.ior = shaderParams.ior;
      materialRef.current.iridescence = shaderParams.iridescence;
    }

    if (depthMaterialRef.current) {
      depthMaterialRef.current.uniforms.uTime.value = t;
    }
  });

  useEffect(() => {
    onLoaded();
  }, [onLoaded]);

  return (
    <>
      <mesh geometry={geometry} scale={[0.66, 0.66, 0.66]} position={[0, isMobile ? -1.3 * 0 : 0, 0]}>
        <CustomShaderMaterial
          ref={materialRef}
          baseMaterial={MeshPhysicalMaterial}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          
        />
        <CustomShaderMaterial
          ref={depthMaterialRef}
          baseMaterial={MeshDepthMaterial}
          vertexShader={vertexShader}
          uniforms={uniforms}
          depthPacking={RGBADepthPacking}
          attach="customDepthMaterial"
          
        />
      </mesh>
      <ambientLight intensity={1.0} color={'#898a8e'} />
      <directionalLight intensity={5} position={[3.7, 3.0, 4.6]} color={'#ffffff'} />
    </>
  );
};

export default LavaMesh;

