export const EyeCircle = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
    <circle
      cx={-eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
    />
);
