import React from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function CameraController() {
    // 'useThree' gives access to canvas it is contained in; 'gl' refers to WebGL renderer
    const { camera, gl } = useThree();
    camera.position.set(12, 12, 12);

    React.useEffect(() => {
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 3;
        controls.maxDistance = 50;
    }, [camera, gl]);

    // return null;
}

export default CameraController;
