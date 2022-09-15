import React from "react";
import { useFrame } from "@react-three/fiber";
import useStore from "../../store";

function Sun() {
    const state = useStore(state => state)
    const ref = React.useRef();
    const [hovered, setHovered] = React.useState(false);
    
    const handleClick = () => {
        state.pauseToggle();
        console.log('Sun clicked. Playing state: ' + state.playing)
    }

    const rotation = 0.003
    useFrame(() => {
        ref.current.rotation.x += rotation/7;
        ref.current.rotation.y += rotation;
        ref.current.rotation.z += rotation/9;
    })

    return(
        <mesh
            ref={ref}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={handleClick}>
            <sphereGeometry args={[2, 12, 12]} />
            <meshStandardMaterial emissive="gold" emissiveIntensity={hovered ? 1 : 0.85} />
        </mesh>
    )
}

export default Sun;
