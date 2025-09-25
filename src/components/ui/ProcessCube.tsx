import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Cube3D from './Cube3D';

interface ProcessCubeProps {
  stepNumber: string;
}

const ProcessCube = ({ stepNumber }: ProcessCubeProps) => {
  return (
    <div className="w-[100px] h-[100px]">
      <Canvas camera={{ position: [5, 5, 5] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Cube3D number={stepNumber} />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ProcessCube;