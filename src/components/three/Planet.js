import React from "react";
import { useFrame } from "@react-three/fiber";
import { orbitCalculator, randomStartingPosition, handleRotation } from "./utils";

// 'props' will include color, size, distance, and possibly more
function Planet({ color, size, distance, speed }) {
    const ref = React.useRef();

    const rotation = 0.003;
    useFrame(() => {
        let pos = ref.current.position;
        [pos.x, pos.z] = orbitCalculator(distance, pos, speed);
        ref.current.rotation.y += rotation;
    })
    

    return(
        <mesh
            ref={ref}
            position={randomStartingPosition(distance)}>
            <sphereGeometry args={[size, 12, 12]}/>
            <meshBasicMaterial color={color}/>
        </mesh>
    )
}

export default Planet;
