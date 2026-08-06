import { Component, type ReactNode, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

class ThreeErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.warn('3D Canvas fallback triggered:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

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
  useFrame((_state, delta) => {
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
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fallbackUI = (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="relative w-[300px] h-[300px] flex items-center justify-center">
        <div className="absolute w-[220px] h-[220px] rounded-full bg-gradient-to-tr from-[#B600A8]/50 to-[#7621B0]/50 blur-3xl animate-pulse" />
        <div className="absolute w-[180px] h-[180px] rounded-full bg-gradient-to-tr from-[#00D4FF]/40 to-[#B600A8]/40 blur-2xl animate-spin" style={{ animationDuration: '15s' }} />
      </div>
    </div>
  );

  if (isMobile || !hasWebGL) {
    return fallbackUI;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <ThreeErrorBoundary fallback={fallbackUI}>
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ alpha: true }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#B600A8" />
          <Scene />
          <Environment preset="city" />
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
}
