import React from "react";
import { useFrame } from "@react-three/fiber";
// import { Vector3 } from "three";
import useStore from "../../store";
import { orbitCalculator /*randomStartingPosition*/ } from "./utils";

function Planet({ position, distance, speed, color, size, parentDistance = null }) {
  // if 'parentDistance' exists, then 'position' refers to the position of the parent
  const ref = React.useRef();
  const playing = useStore((state) => state.playing);
  const [moonPos, setMoonPos] = React.useState([0, 0, 0]);

  useFrame(() => {
    if (parentDistance && playing) {
      setMoonPos(orbitCalculator(distance, moonPos, speed, position));
    }
  });

  return (
    <mesh ref={ref} position={parentDistance ? moonPos : position}>
      <sphereGeometry args={[size, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

export default Planet;
