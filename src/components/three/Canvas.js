import React from "react";
import { Canvas } from "@react-three/fiber";
import { CameraController, Sun, Planet, OrbitCircle, AxesDisplay } from "./";

function CanvasContainer() {
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
