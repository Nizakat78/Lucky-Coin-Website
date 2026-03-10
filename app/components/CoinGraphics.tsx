'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron, Icosahedron, OrbitControls, Cylinder, Box, Cone, Text as Text3D } from '@react-three/drei';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';

// ============ Shared Lights ============
const sharedLights = (
  <>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00FF88" />
  </>
);

// ============ Animated Lucky Coin 3D ============
function LuckyCoin3D({ position = [0, 0, 0], size = 1 }: { position?: [number, number, number], size?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.8;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5} position={position}>
      {/* Main Coin */}
      <mesh ref={meshRef}>
        <cylinderGeometry args={[size, size, size * 0.2, 32]} />
        <MeshDistortMaterial
          color="#00FF88"
          emissive="#00D4FF"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.2}
          distort={0.1}
          speed={2}
        />
      </mesh>
      
      {/* Glow Ring */}
      <mesh ref={glowRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[size * 1.3, 0.04, 16, 32]} />
        <meshStandardMaterial
          color="#00FF88"
          emissive="#00FF88"
          emissiveIntensity={1.5}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Inner Glow */}
      <mesh>
        <sphereGeometry args={[size * 0.8, 16, 16]} />
        <meshStandardMaterial
          color="#00FF88"
          emissive="#00D4FF"
          emissiveIntensity={0.3}
          transparent
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
}

// ============ Four Leaf Clover 3D ============
function Clover3D({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  const leafPositions = [
    [0.5, 0.5, 0],
    [-0.5, 0.5, 0],
    [0.5, -0.5, 0],
    [-0.5, -0.5, 0],
  ];

  const leafColors = ['#00FF88', '#22C55E', '#4ADE80', '#00D4FF'];

  return (
    <group ref={groupRef} position={position}>
      {leafPositions.map((pos, i) => (
        <Float key={i} speed={3 + i} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={pos as [number, number, number]} rotation={[0, 0, i * Math.PI / 2]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <MeshDistortMaterial
              color={leafColors[i]}
              emissive={leafColors[i]}
              emissiveIntensity={0.4}
              metalness={0.5}
              roughness={0.4}
              distort={0.15}
              speed={1}
            />
          </mesh>
        </Float>
      ))}
      {/* Stem */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.5, 16]} />
        <MeshDistortMaterial
          color="#166534"
          emissive="#22C55E"
          emissiveIntensity={0.3}
          metalness={0.4}
          roughness={0.5}
        />
      </mesh>
      {/* Center Glow */}
      <mesh position={[0, 0, 0.15]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#FCD34D"
          emissive="#F59E0B"
          emissiveIntensity={0.8}
        />
      </mesh>
    </group>
  );
}

// ============ Rocket 3D with Flame Animation ============
function Rocket3D({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);
  const flameRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.15;
    }
    if (flameRef.current) {
      flameRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 8) * 0.25;
      flameRef.current.scale.x = 1 + Math.sin(state.clock.elapsedTime * 6) * 0.15;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <Float speed={3} rotationIntensity={0.1} floatIntensity={0.3}>
        {/* Rocket Body */}
        <mesh position={[0, 0, 0]}>
          <coneGeometry args={[0.3, 0.9, 16]} />
          <MeshDistortMaterial
            color="#3B82F6"
            emissive="#60A5FA"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* Window */}
        <mesh position={[0, 0.15, 0.2]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#60A5FA"
            emissive="#93C5FD"
            emissiveIntensity={0.6}
            metalness={0.8}
            roughness={0.1}
          />
        </mesh>
        {/* Fins */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0, -0.25, 0]} rotation={[0, (i * Math.PI * 2) / 3, Math.PI / 4]}>
            <coneGeometry args={[0.18, 0.3, 4]} />
            <MeshDistortMaterial
              color="#60A5FA"
              emissive="#3B82F6"
              emissiveIntensity={0.4}
              metalness={0.75}
              roughness={0.25}
            />
          </mesh>
        ))}
        {/* Animated Flame */}
        <mesh ref={flameRef} position={[0, -0.6, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.15, 0.4, 16]} />
          <meshStandardMaterial
            color="#F97316"
            emissive="#EA580C"
            emissiveIntensity={1.2}
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>
    </group>
  );
}

// ============ Chart/Growth 3D with Animation ============
function Chart3D({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const bars = [0.35, 0.6, 0.9, 1.2, 1.7];
  const barRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, delta) => {
    barRefs.current.forEach((bar, i) => {
      if (bar) {
        bar.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2 + i * 0.5) * 0.08;
      }
    });
  });

  return (
    <group position={position}>
      {bars.map((height, i) => (
        <mesh 
          key={i} 
          ref={(el) => (barRefs.current[i] = el)}
          position={[(i - 2) * 0.3, height / 2 - 0.15, 0]}
        >
          <boxGeometry args={[0.18, height, 0.18]} />
          <MeshDistortMaterial
            color={height > 1 ? '#22C55E' : '#3B82F6'}
            emissive={height > 1 ? '#4ADE80' : '#60A5FA'}
            emissiveIntensity={0.6}
            metalness={0.75}
            roughness={0.25}
            distort={0.08}
            speed={1}
          />
        </mesh>
      ))}
      {/* Arrow */}
      <mesh position={[0.9, 0.7, 0]} rotation={[0, 0, -Math.PI / 4]}>
        <coneGeometry args={[0.2, 0.5, 16]} />
        <MeshDistortMaterial
          color="#22C55E"
          emissive="#4ADE80"
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
}

// ============ Globe/Network 3D ============
function Globe3D({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3} position={position}>
      {/* Globe */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.8, 24, 24]} />
        <MeshDistortMaterial
          color="#3B82F6"
          emissive="#60A5FA"
          emissiveIntensity={0.35}
          metalness={0.55}
          roughness={0.35}
          distort={0.25}
          speed={1.5}
        />
      </mesh>
      
      {/* Single Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.1, 0.03, 8, 48]} />
        <MeshDistortMaterial
          color="#60A5FA"
          emissive="#3B82F6"
          emissiveIntensity={0.4}
          metalness={0.85}
          roughness={0.15}
        />
      </mesh>
    </Float>
  );
}

// ============ Users/Community 3D ============
function Users3D({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const userPositions = [
    [0, 0, 0],
    [0.55, 0.18, 0.25],
    [-0.55, 0.18, 0.25],
    [0.35, -0.28, 0.45],
    [-0.35, -0.28, 0.45],
  ];

  return (
    <group position={position}>
      {userPositions.map((pos, i) => (
        <Float key={i} speed={2 + i * 0.25} rotationIntensity={0.1} floatIntensity={0.25}>
          <mesh position={pos as [number, number, number]}>
            <sphereGeometry args={[0.18, 16, 16]} />
            <MeshDistortMaterial
              color={['#60A5FA', '#93C5FD', '#BFDBFE', '#3B82F6', '#2563EB'][i]}
              emissive="#3B82F6"
              emissiveIntensity={0.45}
              metalness={0.65}
              roughness={0.3}
              distort={0.08}
              speed={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// ============ Lightning Bolt 3D ============
function Lightning3D({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 4) * 0.12);
    }
  });

  return (
    <Float speed={4} rotationIntensity={0.4} floatIntensity={0.45} position={position}>
      <mesh ref={meshRef} rotation={[0, 0, Math.PI / 4]}>
        <octahedronGeometry args={[0.55, 0]} />
        <MeshDistortMaterial
          color="#FCD34D"
          emissive="#F59E0B"
          emissiveIntensity={0.9}
          metalness={0.65}
          roughness={0.25}
          distort={0.15}
          speed={2.5}
        />
      </mesh>
      {/* Electric Glow */}
      <mesh>
        <sphereGeometry args={[0.7, 16, 16]} />
        <meshStandardMaterial
          color="#FCD34D"
          emissive="#F59E0B"
          emissiveIntensity={0.25}
          transparent
          opacity={0.18}
        />
      </mesh>
    </Float>
  );
}

// ============ Shield/Security 3D ============
function Shield3D({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.45) * 0.04;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.18} floatIntensity={0.28} position={position}>
      {/* Shield Body */}
      <mesh ref={meshRef}>
        <torusGeometry args={[0.6, 0.18, 16, 32, Math.PI]} />
        <MeshDistortMaterial
          color="#3B82F6"
          emissive="#60A5FA"
          emissiveIntensity={0.55}
          metalness={0.8}
          roughness={0.18}
        />
      </mesh>
      {/* Center Lock */}
      <mesh position={[0, 0.22, 0]}>
        <sphereGeometry args={[0.16, 16, 16]} />
        <MeshDistortMaterial
          color="#60A5FA"
          emissive="#3B82F6"
          emissiveIntensity={0.7}
          metalness={0.75}
          roughness={0.22}
        />
      </mesh>
    </Float>
  );
}

// ============ Fire/Burn 3D ============
function Fire3D({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const flames = useMemo(() => Array.from({ length: 9 }), []);
  const colors = ['#EF4444', '#F97316', '#FCD34D'];

  return (
    <group position={position}>
      {flames.map((_, i) => (
        <Float
          key={i}
          speed={2.5 + Math.random() * 1.5}
          rotationIntensity={0.4}
          floatIntensity={0.8 + Math.random() * 0.4}
          position={[(Math.random() - 0.5) * 0.9, (i % 3) * 0.42, (Math.random() - 0.5) * 0.25]}
        >
          <mesh>
            <coneGeometry args={[0.09 + Math.random() * 0.06, 0.3 + Math.random() * 0.18, 16]} />
            <MeshDistortMaterial
              color={colors[i % 3]}
              emissive={colors[i % 3]}
              emissiveIntensity={0.85}
              metalness={0.25}
              roughness={0.55}
              distort={0.25}
              speed={1.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// ============ Bullhorn/Marketing 3D ============
function Bullhorn3D({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 1.8) * 0.04;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <Float speed={2} rotationIntensity={0.25} floatIntensity={0.45}>
        {/* Bullhorn Body */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.13, 0.4, 0.6, 24, 1, true]} />
          <MeshDistortMaterial
            color="#3B82F6"
            emissive="#60A5FA"
            emissiveIntensity={0.45}
            metalness={0.7}
            roughness={0.22}
            side={THREE.DoubleSide}
          />
        </mesh>
        {/* Sound Waves */}
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0.45 + i * 0.28, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.1 + i * 0.09, 0.025, 8, 24]} />
            <MeshDistortMaterial
              color="#60A5FA"
              emissive="#3B82F6"
              emissiveIntensity={0.45}
              transparent
              opacity={0.75 - i * 0.18}
            />
          </mesh>
        ))}
      </Float>
    </group>
  );
}

// ============ Code/Development 3D ============
function Code3D({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
  return (
    <Float speed={2} rotationIntensity={0.25} floatIntensity={0.45} position={position}>
      <group>
        {/* Opening Bracket */}
        <mesh position={[-0.35, 0, 0]}>
          <torusGeometry args={[0.27, 0.045, 8, 24, Math.PI]} />
          <MeshDistortMaterial
            color="#60A5FA"
            emissive="#3B82F6"
            emissiveIntensity={0.55}
            metalness={0.7}
            roughness={0.22}
          />
        </mesh>
        {/* Closing Bracket */}
        <mesh position={[0.35, 0, 0]} rotation={[0, Math.PI, 0]}>
          <torusGeometry args={[0.27, 0.045, 8, 24, Math.PI]} />
          <MeshDistortMaterial
            color="#60A5FA"
            emissive="#3B82F6"
            emissiveIntensity={0.55}
            metalness={0.7}
            roughness={0.22}
          />
        </mesh>
      </group>
    </Float>
  );
}

// ============ Social Media Icons 3D ============
function SocialIcon3D({ type, position = [0, 0, 0] }: { type: string; position?: [number, number, number] }) {
  const colors: Record<string, string> = {
    twitter: '#3B82F6',
    telegram: '#0EA5E9',
    discord: '#8B5CF6',
    instagram: '#EC4899',
    tiktok: '#EF4444',
    youtube: '#DC2626',
  };

  const color = colors[type] || '#3B82F6';
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.08;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.45} position={position}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.45, 0]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.65}
          metalness={0.7}
          roughness={0.22}
          distort={0.08}
          speed={1.8}
        />
      </mesh>
    </Float>
  );
}

// ============ Scene Container ============
interface Scene3DProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  fov?: number;
}

function Scene3D({ children, cameraPosition = [0, 0, 4.5], fov = 50 }: Scene3DProps) {
  return (
    <Canvas 
      camera={{ position: cameraPosition, fov }}
      dpr={[1, 2]}
      performance={{ min: 0.5 }}
      gl={{ antialias: true, alpha: true }}
    >
      {sharedLights}
      <fog attach="fog" args={['#000000', 6, 12]} />
      {children}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.4}
        makeDefault
      />
    </Canvas>
  );
}

// ============ Export Components ============

export function HeroScene() {
  return (
    <Scene3D cameraPosition={[0, 0, 7]} fov={45}>
      <LuckyCoin3D position={[0, 0, 0]} size={1.6} />
      <Clover3D position={[2.2, 1.3, -0.8]} />
      <Rocket3D position={[-2.2, -1.3, 0.2]} />
    </Scene3D>
  );
}

export function StatsScene({ type }: { type: 'coins' | 'users' | 'chart' | 'globe' }) {
  return (
    <Scene3D cameraPosition={[0, 0, 4.5]} fov={50}>
      {type === 'coins' && <LuckyCoin3D size={0.75} />}
      {type === 'users' && <Users3D />}
      {type === 'chart' && <Chart3D />}
      {type === 'globe' && <Globe3D />}
    </Scene3D>
  );
}

export function FeaturesScene({ type }: { type: 'bolt' | 'shield' | 'users' | 'fire' | 'bullhorn' | 'code' | 'coin' }) {
  return (
    <Scene3D cameraPosition={[0, 0, 4]} fov={50}>
      {type === 'bolt' && <Lightning3D />}
      {type === 'shield' && <Shield3D />}
      {type === 'users' && <Users3D />}
      {type === 'fire' && <Fire3D />}
      {type === 'bullhorn' && <Bullhorn3D />}
      {type === 'code' && <Code3D />}
      {type === 'coin' && <LuckyCoin3D size={0.55} />}
    </Scene3D>
  );
}

export function SocialScene({ type }: { type: string }) {
  return (
    <Scene3D cameraPosition={[0, 0, 4]} fov={50}>
      <SocialIcon3D type={type} />
    </Scene3D>
  );
}

export function RoadmapScene({ phase }: { phase: number }) {
  return (
    <Scene3D cameraPosition={[0, 0, 4]} fov={50}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.45}>
        <mesh>
          {phase % 3 === 0 && <sphereGeometry args={[0.38, 16, 16]} />}
          {phase % 3 === 1 && <octahedronGeometry args={[0.38, 0]} />}
          {phase % 3 === 2 && <icosahedronGeometry args={[0.38, 0]} />}
          <MeshDistortMaterial
            color={['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'][phase % 5]}
            emissive={['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'][phase % 5]}
            emissiveIntensity={0.6}
            metalness={0.7}
            roughness={0.22}
          />
        </mesh>
      </Float>
    </Scene3D>
  );
}

export function ContactScene({ type }: { type: 'bubbles' | 'envelope' }) {
  return (
    <Scene3D cameraPosition={[0, 0, 4.5]} fov={50}>
      {type === 'bubbles' && (
        <group>
          {[...Array(4)].map((_, i) => (
            <Float
              key={i}
              speed={1.8 + i * 0.4}
              rotationIntensity={0.25}
              floatIntensity={0.4 + i * 0.15}
              position={[(Math.random() - 0.5) * 1.8, (Math.random() - 0.5) * 1.8, (Math.random() - 0.5) * 0.4]}
            >
              <mesh>
                <sphereGeometry args={[0.18 - i * 0.018, 16, 16]} />
                <MeshDistortMaterial
                  color={['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE'][i]}
                  emissive={['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE'][i]}
                  emissiveIntensity={0.4}
                  metalness={0.45}
                  roughness={0.35}
                  transparent
                  opacity={0.8 - i * 0.08}
                />
              </mesh>
            </Float>
          ))}
        </group>
      )}
      {type === 'envelope' && (
        <Float speed={1.8} rotationIntensity={0.18} floatIntensity={0.28}>
          <mesh>
            <boxGeometry args={[0.85, 0.55, 0.35]} />
            <MeshDistortMaterial
              color="#3B82F6"
              emissive="#60A5FA"
              emissiveIntensity={0.45}
              metalness={0.6}
              roughness={0.28}
            />
          </mesh>
        </Float>
      )}
    </Scene3D>
  );
}

export function TokenomicsScene() {
  return (
    <Scene3D cameraPosition={[0, 0, 6]} fov={45}>
      <LuckyCoin3D position={[-1.6, 0, 0]} size={0.9} />
      <Chart3D position={[1.6, 0, 0]} />
    </Scene3D>
  );
}
