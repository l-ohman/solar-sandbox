import React from "react";
import { useFrame } from "@react-three/fiber";
// import { Vector3 } from "three";
import useStore from "../../store";
import { Moon } from "./";
import { orbitCalculator, randomStartingPosition } from "./utils";

function Planet({ id, color, size, distance, speed, parent = null }) {
  // state[parent] is the position of the parent planet
  const state = useStore((state) => state);
  const ref = React.useRef();

  // This prevents pausing from setting planets to a starting position
  const [startPosition, setStartPosition] = React.useState([distance, 0, 0]);
  const [currentPosition, setCurrentPosition] = React.useState(startPosition);

  useFrame(() => {
    if (state.playing) {
      let pos = ref.current.position;
      let newPos;
      // console.log(`id: ${id} | distance: ${distance} | speed: ${speed}`)
      if (parent) {
        newPos = orbitCalculator(distance, pos, speed, state.planets[parent]);
        pos.x = newPos.x;
        pos.z = newPos.z;
      } else {
        newPos = orbitCalculator(distance, pos, speed);
        pos.x = newPos.x;
        pos.z = newPos.z;
        state.updatePlanets(id, pos);
        ref.current.rotation.y += 0.003;
      };
      // setCurrentPosition(pos);
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
