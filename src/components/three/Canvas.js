import React from "react";
import { Canvas } from "@react-three/fiber";
import { CameraController, Sun, PlanetContainer, AxesDisplay } from "./";
import useStore from "../../store";
import { restructureStoreData } from "./utils";

function CanvasContainer() {
  // Maybe should restructure store for this...?
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  // Probably better to restructure the data before sending it to the store
  let planets = restructureStoreData(nodes, edges);

  return (
    <div className="half">
      <Canvas>
        <CameraController />
        <AxesDisplay />
        <Sun />

        {planets.map((planet) => (
          <PlanetContainer key={planet.id} {...planet} />
        ))}
      </Canvas>
    </div>
  );
}

export default CanvasContainer;
