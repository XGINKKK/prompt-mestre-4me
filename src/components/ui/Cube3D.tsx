import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Mesh } from 'three';

interface Cube3DProps {
  number: string;
}

function Cube3D({ number }: Cube3DProps) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="white" 
        transparent 
        opacity={0.9}
        roughness={0.1}
        metalness={0.1}
      />
      <Text
        position={[0, 0, 1.1]}
        fontSize={0.8}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {number}
      </Text>
    </mesh>
  );
}

export default Cube3D;