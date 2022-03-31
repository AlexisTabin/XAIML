import {EyeCircle} from './Eye'
import {Mouth} from './Mouth'
import { BackgroundCircle } from './BackgoundCircle';
import { FaceContainer } from './FaceContainer';

export const Face = ({
    width,
    height,
    centerX,
    centerY,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthWidth,
    mouthRadius
}) => (
<FaceContainer
width={width}
height={height}
centerX={centerX}
centerY={centerY}
>
  <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth}></BackgroundCircle>
  <EyeCircle eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} eyeRadius={eyeRadius}></EyeCircle>
  <EyeCircle eyeOffsetX={-eyeOffsetX} eyeOffsetY={eyeOffsetY} eyeRadius={eyeRadius}></EyeCircle>
  <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth}></Mouth>
</FaceContainer>
)