import React from "react";
import { useFrame } from "@react-three/fiber";
import useStore from "../../store";

function Planet({ position, distance, speed, color, size, parentDistance = null }) {
  // if 'parentDistance' exists, then 'position' refers to the position of the parent
  const playing = useStore((state) => state.playing);
  const moonPos = [
    position[0] + distance,
    position[1],
    position[2],
  ]
  const ref = React.useRef();

  // https://discourse.threejs.org/t/change-coordinate-origin/16136
  // check here for more guidance

  useFrame(() => {
    // rotate moon here
    if (parentDistance && playing) {
      // currently ref is undefined...?
      console.log('ref:')
      console.log(ref);
      // ref.current.position = position;
    }
  });

  // planet or moon meshes
  if (!parentDistance) {
    return(
      <mesh position={position}>
        <sphereGeometry args={[size, 24, 24]}/>
        <meshBasicMaterial color={color} />
      </mesh>
    );
  } else {
    <group ref={ref}>
      {/* moon mesh */}
      <mesh>
        <sphereGeometry args={[size, 24, 24]}/>
        <meshBasicMaterial color={color} />
      </mesh>
      {/* centered mesh (for rotation) */}
      <mesh>
        <boxBufferGeometry args={[0.1,0.1,0.1]} />
      </mesh>
    </group>
  }
}

export default Planet;
