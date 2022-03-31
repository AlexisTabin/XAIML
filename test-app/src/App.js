import './App.css';
import {arc} from 'd3';

const width = window.innerWidth;
const height = window.innerHeight;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 20;
const mouthRadius = 300;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI/2)
  .endAngle(Math.PI*3/2)

const App = () => (
<svg width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>
      <circle
        r={centerY - strokeWidth / 2}
        fill="yellow"
        stroke="black"
        stroke-width={strokeWidth}
      />
      <circle
        cx={-eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius}
      />
      <circle
        cx={eyeOffsetX}
        cy={-eyeOffsetY}
        r={eyeRadius}
      />
      <path 
        d={mouthArc()}
      />
    </g>
  </svg>
);

export default App;
