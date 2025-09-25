import { Canvas } from '@react-three/fiber';
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
      {/* Número renderizado como HTML sobre o cubo */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '4rem',
          fontWeight: 'bold',
          color: 'black',
          pointerEvents: 'none',
          zIndex: 10
        }}
      >
        {stepNumber}
      </div>
    </group>
  );
}

const ProcessCube = ({ stepNumber }: ProcessCubeProps) => {
  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
      <Canvas 
        camera={{ position: [3, 3, 3], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.4} />
          <Cube stepNumber={stepNumber} />
        </Suspense>
      </Canvas>
      
      {/* Fallback: número sobreposto caso o 3D não funcione */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-4xl md:text-6xl lg:text-8xl font-bold text-white z-20">
          {stepNumber}
        </span>
      </div>
    </div>
  );
};

export default ProcessCube;