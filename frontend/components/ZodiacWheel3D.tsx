"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Text } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

const SIGNS = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

function ZodiacWheel({ mobile }: { mobile: boolean }) {
  const groupRef = useRef<Group>(null);
  const signRadius = mobile ? 1.95 : 2.25;
  const signSize = mobile ? 0.24 : 0.31;
  const ringArgs: [number, number, number, number] = mobile
    ? [2.25, 2.55, 56, 20]
    : [2.55, 2.95, 72, 24];
  const innerArgs: [number, number, number, number] = mobile
    ? [1.35, 1.75, 48, 16]
    : [1.55, 2.02, 64, 20];

  const positions = useMemo(
    () =>
      SIGNS.map((s, i) => {
        const a = (i / 12) * Math.PI * 2;
        return { s, x: Math.cos(a) * signRadius, z: Math.sin(a) * signRadius, a };
      }),
    [signRadius]
  );

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!groupRef.current) return;
    groupRef.current.rotation.y = t * 0.085;
    groupRef.current.position.y = Math.sin(t * 0.35) * 0.06;
  });

  return (
    <group ref={groupRef}>
      <mesh rotation-x={-Math.PI / 2}>
        <torusGeometry args={ringArgs} />
        <meshStandardMaterial color="#1f2f6f" metalness={0.35} roughness={0.4} emissive="#1a2f7a" emissiveIntensity={0.24} />
      </mesh>

      <mesh rotation-x={-Math.PI / 2} position={[0, 0.01, 0]}>
        <torusGeometry args={innerArgs} />
        <meshStandardMaterial color="#273d89" metalness={0.28} roughness={0.44} emissive="#20397d" emissiveIntensity={0.2} />
      </mesh>

      <mesh rotation-x={-Math.PI / 2} position={[0, -0.06, 0]}>
        <cylinderGeometry args={[1.3, 1.3, 0.12, 48]} />
        <meshStandardMaterial color="#122352" emissive="#152f74" emissiveIntensity={0.15} />
      </mesh>

      {positions.map((p) => (
        <Text
          key={p.s}
          position={[p.x, 0.11, p.z]}
          rotation={[-Math.PI / 2, -p.a + Math.PI / 2, 0]}
          fontSize={signSize}
          color="#e5c262"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.007}
          outlineColor="#6f5415"
        >
          {p.s}
        </Text>
      ))}
    </group>
  );
}

export default function ZodiacWheel3D({ mobile }: { mobile: boolean }) {
  return (
    <Canvas dpr={mobile ? [1, 1.2] : [1, 1.8]} camera={{ position: [0, 2.8, 6.1], fov: mobile ? 49 : 43 }} gl={{ antialias: !mobile, powerPreference: "high-performance" }}>
      <ambientLight intensity={0.62} />
      <pointLight position={[4, 5, 2]} color="#e8bf5a" intensity={1.7} />
      <pointLight position={[-3, -1, 4]} color="#3758cc" intensity={1.1} />
      <Sparkles count={mobile ? 55 : 115} size={mobile ? 1.8 : 2.4} speed={0.18} opacity={0.38} color="#d8b45d" scale={[12, 7, 12]} />
      <ZodiacWheel mobile={mobile} />
    </Canvas>
  );
}
