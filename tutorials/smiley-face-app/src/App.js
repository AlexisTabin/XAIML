import './App.css';

import { Face } from './Face';

const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;
const eyeOffsetX = 90;
const strokeWidth = 20;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 50;
const mouthRadius = 200;

const App = () => (
  <Face
    width={width}
    height={height}
    centerX={centerX}
    centerY={centerY}
    eyeOffsetX={eyeOffsetX}
    eyeOffsetY={eyeOffsetY}
    eyeRadius={eyeRadius}
    strokeWidth={strokeWidth}
    mouthRadius={mouthRadius}
    mouthWidth={mouthWidth}
    ></Face>
);

export default App;
