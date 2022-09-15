import React from "react";
import { useFrame } from "@react-three/fiber";
import useStore from "../../store";
import { orbitCalculator, randomStartingPosition } from "./utils";

// 'props' will include color, size, distance, and possibly more
function Planet({ color, size, distance, speed }) {
    const playing = useStore(state => state.playing);
    const ref = React.useRef();

    // This prevents pausing from setting planets to a starting position
    const [position, setPosition] = React.useState(randomStartingPosition(distance));

    useFrame(() => {
        if (playing) {
            let pos = ref.current.position;
            [pos.x, pos.z] = orbitCalculator(distance, pos, speed);
        }
        ref.current.rotation.y += 0.003;
    })
    
    return(
        <mesh
            ref={ref}
            position={position}>
            <sphereGeometry args={[size, 12, 12]}/>
            <meshBasicMaterial color={color}/>
        </mesh>
    )
}

export default Planet;
