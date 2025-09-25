import './ProcessCube.css';

interface ProcessCubeProps {
  stepNumber: string;
}

const ProcessCube = ({ stepNumber }: ProcessCubeProps) => {
  return (
    <div className="process-cube-container">
      <div className="process-cube">
        {/* Face frontal */}
        <div className="cube-face cube-face-front">
          <span className="cube-number">{stepNumber}</span>
        </div>
        
        {/* Face traseira */}
        <div className="cube-face cube-face-back">
          <span className="cube-number">{stepNumber}</span>
        </div>
        
        {/* Face direita */}
        <div className="cube-face cube-face-right">
          <span className="cube-number">{stepNumber}</span>
        </div>
        
        {/* Face esquerda */}
        <div className="cube-face cube-face-left">
          <span className="cube-number">{stepNumber}</span>
        </div>
        
        {/* Face superior */}
        <div className="cube-face cube-face-top">
          <span className="cube-number">{stepNumber}</span>
        </div>
        
        {/* Face inferior */}
        <div className="cube-face cube-face-bottom">
          <span className="cube-number">{stepNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default ProcessCube;