import React from "react";
import { Canvas } from "@react-three/fiber";
import { CameraController, Sun, Planet, OrbitCircle, PlanetContainer, AxesDisplay } from "./";
import useStore from "../../store";
import { restructureStoreData } from "./utils";

const planet2 = {
    id: 2,
    color: 'green',
    size: 0.8,
    distance: 12,
    speed: 9,
};
const moon1 = {
    id: 3,
    parent: 2,
    color: 'blue',
    size: 0.3,
    distance: 3,
    speed: 75,
};

function CanvasContainer() {
    const nodes = useStore(state => state.nodes);
    const edges = useStore(state => state.edges);

    restructureStoreData(nodes, edges);

    // console.log('test')

    return(
        <div className="half">
            <Canvas>
                <CameraController />
                <AxesDisplay length={8}/>
                <Sun />
                {/* <Planet {...planet1} /> */}
                <Planet {...planet2} />
                <OrbitCircle distance={planet2.distance} />
                <Planet {...moon1} />
            </Canvas>
        </div>
    )
}

export default CanvasContainer;
