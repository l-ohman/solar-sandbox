import React from "react";
import useStore from "../../store";
import { useFrame } from "@react-three/fiber";
import { Moon, OrbitCircle, Planet } from "./";
import { orbitCalculator } from "../utils";

export default function PlanetContainer({ data, moons }) {
  const playing = useStore((state) => state.playing);
  const [planetPos, setPlanetPos] = React.useState([data.distance, 0, 0]);

  useFrame(() => {
    if (playing) {
      let newPos = orbitCalculator(data.distance, planetPos, data.speed);
      setPlanetPos(newPos);
    } else {
      // Should find a way to update planet position if 'distance' is changed while paused
    }
  });

  return (
    <>
      <Planet {...data} position={planetPos} />
      <OrbitCircle distance={data.distance} />
      {moons.map((moon) => {
        return <Moon key={moon.id} {...moon.data} planetPosition={planetPos} />;
      })}
    </>
  );
}
