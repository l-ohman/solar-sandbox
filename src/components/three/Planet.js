import React from "react";
import { useFrame } from "@react-three/fiber";
import useStore from "../../store";
import { orbitCalculator /*randomStartingPosition*/ } from "./utils";

function Planet({ position, distance, speed, color, size, parentDistance = null }) {
  // if 'parentDistance' exists, then 'position' refers to the position of the parent
  const playing = useStore((state) => state.playing);
  const [moonPos, setMoonPos] = React.useState([distance + parentDistance, 0, 0]);

  useFrame(() => {
    if (parentDistance && playing) {
      setMoonPos(orbitCalculator(distance, moonPos, speed, position));
    }
  });

  return (
    <mesh position={parentDistance ? moonPos : position}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

export default Planet;
