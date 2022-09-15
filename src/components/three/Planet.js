import React from "react";
import { useFrame } from "@react-three/fiber";
// import { Vector3 } from "three";
import useStore from "../../store";
import { orbitCalculator, randomStartingPosition } from "./utils";

function Planet({ id, color, size, distance, speed, parent = null }) {
  // state[parent] is the position of the parent planet
  const state = useStore((state) => state);
  const ref = React.useRef();

  // This prevents pausing from setting planets to a starting position
  const [startPosition, setStartPosition] = React.useState([distance, 0, 0]);

  useFrame(() => {
    if (state.playing) {
      let pos = ref.current.position;
      if (parent) {
        [pos.x, pos.y, pos.z] = orbitCalculator(distance, pos, speed, state.planetPositions[parent]);
      } else {
        [pos.x, pos.y, pos.z] = orbitCalculator(distance, pos, speed);
        state.updatePlanetPositions(id, pos);
      };
    }
  });

  return (
    <mesh ref={ref} position={startPosition}>
      <sphereGeometry args={[size, 12, 12]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

export default Planet;
