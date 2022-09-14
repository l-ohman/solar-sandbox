import React from "react";
import { Canvas } from "@react-three/fiber";
import { CameraController, Sun, AxesDisplay } from "./";

function CanvasContainer() {
    return(
        <Canvas>
            <CameraController />
            <AxesDisplay length={8}/>
            <Sun />
        </Canvas>
    )
}

export default CanvasContainer;
