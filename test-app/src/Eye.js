const eyeOffsetY = 100;
const eyeRadius = 40;

export const EyeCircle = ({eyeOffsetX}) => (
    <circle
      cx={-eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
    />
);
