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
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  let planets = restructureStoreData(nodes, edges);

  const stars = React.useMemo(() => generateStars(500), [generateStars])

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
