import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate group based on mouse
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smoothly interpolate rotation towards mouse position
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.y * 0.3, delta * 2);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.3, delta * 2);
      
      // Add a slow continuous rotation
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: '#B600A8', // Magenta base
    emissive: '#7621B0', // Purple emissive
    emissiveIntensity: 0.2,
    roughness: 0.1,
    metalness: 0.1,
    transmission: 0.9, // glass-like
    thickness: 0.5,
    ior: 1.5,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
  });

  const blueGlassMaterial = new THREE.MeshPhysicalMaterial({
    color: '#00D4FF', // Cyan accent
    emissive: '#0055FF', 
    emissiveIntensity: 0.1,
    roughness: 0.1,
    metalness: 0.2,
    transmission: 0.9,
    thickness: 0.5,
    ior: 1.5,
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[0, 0, 0]} material={glassMaterial}>
          <icosahedronGeometry args={[1.5, 0]} />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[2, 1, -1]} material={blueGlassMaterial}>
          <torusGeometry args={[0.6, 0.2, 16, 32]} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={2.5}>
        <mesh position={[-2, -1, 1]} material={glassMaterial}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={2.5} floatIntensity={1.5}>
        <mesh position={[1.5, -1.5, 0.5]} material={blueGlassMaterial}>
          <sphereGeometry args={[0.5, 32, 32]} />
        </mesh>
      </Float>
    </group>
  );
}

export function Hero3DShapes() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    // Fallback for mobile: A CSS gradient sphere instead of 3D
    return (
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-[#B600A8]/40 to-[#00D4FF]/40 blur-2xl animate-pulse" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#B600A8" />
        <Scene />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
