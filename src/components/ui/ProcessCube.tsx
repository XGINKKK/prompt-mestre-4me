import './ProcessCube.css';

interface ProcessCubeProps {
  stepNumber: string;
}

const ProcessCube = ({ stepNumber }: ProcessCubeProps) => {
  return (
    <div className="cube-dynasty">
      <div className="cube-3d">
        <div className="cube-face front">{stepNumber}</div>
        <div className="cube-face back">{stepNumber}</div>
        <div className="cube-face right">{stepNumber}</div>
        <div className="cube-face left">{stepNumber}</div>
        <div className="cube-face top">{stepNumber}</div>
        <div className="cube-face bottom">{stepNumber}</div>
      </div>
    </div>
  );
};

export default ProcessCube;