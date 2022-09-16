import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  CameraController,
  Sun,
  PlanetContainer,
  generateStars,
  AxesDisplay,
} from "./";
import useStore from "../../store";
import { restructureStoreData } from "./utils";

function CanvasContainer() {
  // Maybe should restructure store for this...?
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  // Probably better to restructure the data before sending it to the store
  let planets = restructureStoreData(nodes, edges);

  // using 'useMemo' to ensure it doesn't recalculate stars every re-render
  const stars = React.useMemo(() => generateStars(300), [generateStars])

  return (
    <div className="half">
      <Canvas>
        <CameraController />
        <AxesDisplay />
        <Sun />

        {planets.map((planet) => (
          <PlanetContainer key={planet.id} {...planet} />
        ))}

        {stars.map((star, i) => (
          <mesh position={star.position} key={i}>
            <boxGeometry args={[0.7, 0.7, 0.7]} />
            <meshBasicMaterial color={star.color} />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
}

export default CanvasContainer;
