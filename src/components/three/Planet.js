import React from "react";
import { useFrame } from "@react-three/fiber";
import useStore from "../../store";

function Planet({ position, distance, speed, color, size, parentDistance = null }) {
  // if 'parentDistance' exists, then 'position' refers to the position of the parent
  const playing = useStore((state) => state.playing);
  // const [moonPos, setMoonPos] = React.useState([distance + parentDistance, 0, 0]);
  // const ref = React.useRef();

  useFrame(() => {
    if (parentDistance && playing) {
      // rotate moon here
    }
  });

  return (
    <group>
      {/* moon mesh */}
      <mesh position={position}>
        <sphereGeometry args={[size, 24, 24]}/>
        <meshBasicMaterial color={color} />
      </mesh>
      {/* centered mesh (for rotation) */}
    </group>
  );
}

export default Planet;
