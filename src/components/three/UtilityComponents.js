import React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { AxesHelper } from "three";
import useStore from "../../store";

export function CameraController() {
  const { camera, gl } = useThree();

  React.useEffect(() => {
    camera.position.set(35, 35, 35);

    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 1;
    controls.maxDistance = 120;

    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  return <></>;
}

export function FrameLimiter({ fps }) {
  // allows us to update the state outside 'useFrame'
  const setThree = useThree((state) => state.set);
  // 'advance' progresses the render 1 tick if frameloop is 'never'
  const advance = useThree((state) => state.advance);
  // 'frameloop' is status of rerendering - can be 'always', 'demand', 'never'
  const frameloop = useThree((state) => state.frameloop);

  useFrame((state) => {
    if (state.get().blocked) return;
    state.set({ blocked: true });

    let time = 1000 / fps - state.clock.getDelta();
    if (time < 0) time = 0;

    // setting a timer for when to allow next tick
    setTimeout(() => {
      state.set({ blocked: false });
      advance();
    }, time);
  });

  React.useEffect(() => {
    if (frameloop !== "never") {
      console.log(frameloop);
      setThree({ frameloop: "never" });
      advance();
    }
  }, [frameloop]);

  return <></>;
}

export function AxesDisplay() {
  // x=red y=green z=blue
  const helper = new AxesHelper(200);
  const axesVisibility = useStore((state) => state.axesVisibility);
  // should dispose of this instead of just making it invisible
  return <primitive object={helper} visible={axesVisibility} />;
}
