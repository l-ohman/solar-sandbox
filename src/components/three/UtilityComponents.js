import React from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { AxesHelper } from "three";
import useStore from "../../store";

export function CameraController() {
    const { camera, gl } = useThree();

    React.useEffect(() => {
        camera.position.set(30, 30, 30);
        const controls = new OrbitControls(camera, gl.domElement);
        controls.minDistance = 1;
        controls.maxDistance = 80;
        return () => {
            controls.dispose();
        }
    }, [camera, gl]);
}

export function AxesDisplay() {
  // x=red y=green z=blue
  const helper = new AxesHelper(200);
  const axesVisibility = useStore((state) => state.axesVisibility);
  // should dispose of this instead of just making it invisible
  return <primitive object={helper} visible={axesVisibility}/>;
}
