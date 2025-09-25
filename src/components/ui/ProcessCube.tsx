import './ProcessCube.css';
import logoImage from '@/assets/logo-cube.png';

interface ProcessCubeProps {
  stepNumber: string;
}

const ProcessCube = ({ stepNumber }: ProcessCubeProps) => {
  return (
    <div className="cube-dynasty">
      <div className="cube-3d">
        <div className="cube-face front">
          <img src={logoImage} alt="Logo" className="cube-logo" />
        </div>
        <div className="cube-face back">
          <img src={logoImage} alt="Logo" className="cube-logo" />
        </div>
        <div className="cube-face right">
          <img src={logoImage} alt="Logo" className="cube-logo" />
        </div>
        <div className="cube-face left">
          <img src={logoImage} alt="Logo" className="cube-logo" />
        </div>
        <div className="cube-face top">
          <img src={logoImage} alt="Logo" className="cube-logo" />
        </div>
        <div className="cube-face bottom">
          <img src={logoImage} alt="Logo" className="cube-logo" />
        </div>
      </div>
    </div>
  );
};

export default ProcessCube;