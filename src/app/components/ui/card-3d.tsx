// File: components/ThreeDModel.js
import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';

const ThreeDModel = () => {
  const meshRef = useRef();
  
  // Create a simple 3D object - can be replaced with a more complex model
  // You could also import a 3D model using useGLTF from drei
  
  useFrame((state, delta) => {
    // Get the CSS variable value for rotation
    const scrollProgress = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--scroll-progress')
    );
    
    // Apply smooth rotation based on scroll
    if (meshRef.current) {
      meshRef.current.rotation.y = scrollProgress * Math.PI * 2;
      meshRef.current.rotation.x = scrollProgress * Math.PI;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <dodecahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial 
          color="#F9CB28" 
          metalness={0.8}
          roughness={0.2}
          emissive="#FF4D4D"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
};

export default ThreeDModel;