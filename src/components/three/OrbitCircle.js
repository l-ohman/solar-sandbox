import React from "react";

function OrbitCircle({ distance }) {
    const ref = React.useRef();
    const [visibility, setVisibility] = React.useState(false);
    
    React.useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = Math.PI / -2;
            setVisibility(true);
        }
    }, [ref.current])

    return(
        <mesh ref={ref} visible={visibility}>
            <ringGeometry args={[distance - 0.04, distance + 0.04, 96]} />
            <meshBasicMaterial color="lightgray" />
        </mesh>
    )
}

export default OrbitCircle;
