import { Canvas } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { useRef } from 'react'
import { Mesh } from 'three'

interface ProcessCubeProps {
  number: string
  size?: number
}

function Cube({ number, size = 2 }: { number: string; size?: number }) {
  const meshRef = useRef<Mesh>(null!)

  return (
    <group>
      {/* Cubo branco */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* Número na face frontal */}
      <Text
        position={[0, 0, size/2 + 0.01]}
        fontSize={size * 0.4}
        color="black"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        {number}
      </Text>
    </group>
  )
}

export const ProcessCube: React.FC<ProcessCubeProps> = ({ number, size = 2 }) => {
  return (
    <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
      <Canvas 
        camera={{ position: [3, 3, 3], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />
        <Cube number={number} size={size} />
      </Canvas>
    </div>
  )
}