import React from "react";
import { useFrame } from "@react-three/fiber";

function SunMaterial() {
    const materialProps ={
        emissive: "white",
    };
    // return <meshBasicMaterial color={'yellow'} />
}

function Sun() {
    const ref = React.useRef();
    const [hovered, setHovered] = React.useState(false);

    React.useEffect(() => {
        
    })

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
            onPointerOut={() => setHovered(false)}>
            <sphereGeometry args={[2, 12, 12]} />
            <meshStandardMaterial emissive="gold" emissiveIntensity={hovered ? 0.97 : 0.82} />
        </mesh>
    )
}

export default Sun;
