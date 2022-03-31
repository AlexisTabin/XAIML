import {arc} from 'd3';

const mouthWidth = 20;
const mouthRadius = 300;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI/2)
  .endAngle(Math.PI*3/2)

export  const Mouth = () => (
    <path 
    d={mouthArc()}
    />
);