import React from "react";
import useStore from "../../store";
import { useFrame } from "@react-three/fiber";
import { Planet, OrbitCircle } from "./";
import { orbitCalculator } from "./utils";

function PlanetContainer({ data, moons }) {
  const playing = useStore((state) => state.playing);
  const [planetPos, setPlanetPos] = React.useState([data.distance, 0, 0]);

  useFrame(() => {
    if (playing) {
      let newPos = orbitCalculator(data.distance, planetPos, data.speed);
      setPlanetPos(newPos);
    }
  });

  return (
    <>
      <Planet {...data} position={planetPos} />
      <OrbitCircle distance={data.distance} />
      {moons.map((moon) => (
        <Planet key={moon.id} {...moon.data} position={planetPos} parentDistance={data.distance} />
      ))}
    </>
  );
}

export default PlanetContainer;

// {/* <Planet {...planet1} /> */}
// <Planet {...planet2} />
// <OrbitCircle distance={planet2.distance} />
// <Planet {...moon1} />

// if (parent) {
//     [pos.x, pos.y, pos.z] = orbitCalculator(distance, pos, speed, state.planetPositions[parent]);
//     }