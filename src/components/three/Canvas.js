import React from "react";
import { Canvas } from "@react-three/fiber";
import { CameraController, Sun, Planet, AxesDisplay } from "./";

function CanvasContainer() {
    const planetProps1 = {
        color: 'red',
        size: 0.3,
        distance: 5,
        speed: 18,
    };
    const planetProps2 = {
        color: 'green',
        size: 0.8,
        distance: 12,
        speed: 9,
    };
    const planetProps3 = {
        color: 'blue',
        size: 1.4,
        distance: 18,
        speed: 5,
    };

    return(
        <div className="half">
            <Canvas>
                <CameraController />
                <AxesDisplay length={8}/>
                <Sun />
                <Planet {...planetProps1} />
                <Planet {...planetProps2} />
                <Planet {...planetProps3} />
            </Canvas>
        </div>
    )
}

export default CanvasContainer;
