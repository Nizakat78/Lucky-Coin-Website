'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Float, Points, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

// Animated Main Sphere with High Emission for Bloom
function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.003;
        meshRef.current.rotation.x += 0.001;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <Float speed={4} rotationIntensity={3} floatIntensity={4}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={3}>
        <meshStandardMaterial
          color="#3B82F6"
          emissive="#60A5FA"
          emissiveIntensity={3}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

// Wireframe Sphere Outer Layer with Bloom
function WireframeSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.y -= 0.002;
        meshRef.current.rotation.x -= 0.001;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} scale={4.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#08CB00"
          wireframe={true}
          transparent={true}
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Floating Particles with Bloom
function ParticleField() {
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000);
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
    }
    return positions;
  }, []);

  return (
    <Points positions={particlesPosition} stride={3} frustumCulled={false}>
      <pointsMaterial
        size={0.1}
        color="#60A5FA"
        transparent={true}
        opacity={0.9}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Green Glowing Stars with Strong Bloom
function GlowingStars() {
  const starsRef = useRef<THREE.Points>(null);
  
  const starsPosition = useMemo(() => {
    const positions = new Float32Array(1000);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
    }
    return positions;
  }, []);

  useEffect(() => {
    const animate = () => {
      if (starsRef.current) {
        starsRef.current.rotation.y += 0.0003;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <Points ref={starsRef} positions={starsPosition} stride={3} frustumCulled={false}>
      <pointsMaterial
        size={0.25}
        color="#08CB00"
        transparent={true}
        opacity={1}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Rotating Rings with High Emission
function RotatingRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const animate = () => {
      if (ring1Ref.current) ring1Ref.current.rotation.z += 0.008;
      if (ring2Ref.current) ring2Ref.current.rotation.z -= 0.005;
      if (ring3Ref.current) ring3Ref.current.rotation.z += 0.003;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <group>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={ring1Ref} position={[0, 0, -4]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[5, 0.04, 16, 100]} />
          <meshStandardMaterial
            color="#3B82F6"
            emissive="#60A5FA"
            emissiveIntensity={2}
            transparent={true}
            opacity={0.5}
          />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh ref={ring2Ref} position={[0, 0, -5]} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[6.5, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#60A5FA"
            emissive="#3B82F6"
            emissiveIntensity={1.5}
            transparent={true}
            opacity={0.4}
          />
        </mesh>
      </Float>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={ring3Ref} position={[0, 0, -6]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
          <torusGeometry args={[8, 0.025, 16, 100]} />
          <meshStandardMaterial
            color="#08CB00"
            emissive="#00FF88"
            emissiveIntensity={1.5}
            transparent={true}
            opacity={0.35}
          />
        </mesh>
      </Float>
    </group>
  );
}

// Floating Geometric Shapes with Strong Bloom
function FloatingShapes() {
  const shapes = useMemo(() => Array.from({ length: 25 }), []);
  
  return (
    <group>
      {shapes.map((_, i) => (
        <Float
          key={i}
          speed={Math.random() * 3 + 1}
          rotationIntensity={Math.random() * 3}
          floatIntensity={Math.random() * 4}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 30,
              (Math.random() - 0.5) * 30,
              (Math.random() - 0.5) * 20 - 3
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            {i % 4 === 0 ? (
              <octahedronGeometry args={[0.25]} />
            ) : i % 4 === 1 ? (
              <icosahedronGeometry args={[0.22]} />
            ) : i % 4 === 2 ? (
              <tetrahedronGeometry args={[0.2]} />
            ) : (
              <dodecahedronGeometry args={[0.18]} />
            )}
            <meshStandardMaterial
              color={i % 2 === 0 ? '#3B82F6' : '#08CB00'}
              emissive={i % 2 === 0 ? '#60A5FA' : '#00FF88'}
              emissiveIntensity={2}
              transparent={true}
              opacity={0.9}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Main Background Scene with Bloom
function BackgroundScene() {
  return (
    <group>
      <AnimatedSphere />
      <WireframeSphere />
      <ParticleField />
      <GlowingStars />
      <RotatingRings />
      <FloatingShapes />
    </group>
  );
}

// Main Component with Bloom Effect
export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div id="canvas-container" style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
      <Canvas
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: false,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
        
        {/* Strong Lighting for Bloom Effect */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={3} color="#3B82F6" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#60A5FA" />
        <pointLight position={[0, 0, 8]} intensity={3} color="#3B82F6" />
        <pointLight position={[5, 5, 5]} intensity={2} color="#08CB00" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#60A5FA" />
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#0B1120', 8, 45]} />
        
        <Suspense fallback={null}>
          <BackgroundScene />
        </Suspense>
        
        {/* Bloom Post-Processing - Similar to Three.js Example */}
        <EffectComposer enableNormalPass={false}>
          <Bloom
            luminanceThreshold={0.15}
            luminanceSmoothing={0.95}
            height={300}
            width={300}
            intensity={2}
            mipmapBlur={true}
          />
        </EffectComposer>
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
          enableDamping={false}
        />
      </Canvas>
    </div>
  );
}
