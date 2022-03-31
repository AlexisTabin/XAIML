import './App.css';
import {EyeCircle} from './Eye'
import {Mouth} from './Mouth'
import { BackgroundCircle } from './BackgoundCircle';

const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;
const eyeOffsetX = 90;
const strokeWidth = 20;

const App = () => (
<svg width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>
      <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth}></BackgroundCircle>
      <EyeCircle eyeOffsetX={eyeOffsetX}></EyeCircle>
      <EyeCircle eyeOffsetX={-eyeOffsetX}></EyeCircle>
      <Mouth></Mouth>
    </g>
  </svg>
);

export default App;
