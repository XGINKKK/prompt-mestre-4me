import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { Suspense } from 'react';

interface ProcessCubeProps {
  stepNumber: string;
}

function Cube({ stepNumber }: ProcessCubeProps) {
  return (
    <group>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <Text
        position={[0, 0, 1.01]}
        fontSize={0.8}
        color="black"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        {stepNumber}
      </Text>
    </group>
  );
}

const ProcessCube = ({ stepNumber }: ProcessCubeProps) => {
  return (
    <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.4} />
          <Cube stepNumber={stepNumber} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ProcessCube;