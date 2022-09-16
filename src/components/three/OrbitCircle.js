import React from "react";

function OrbitCircle({ distance }) {
    const ref = React.useRef();
    
    React.useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = Math.PI / -2;
        }
    }, [ref.current])

    return(
        <mesh ref={ref}>
            <ringGeometry args={[distance - 0.04, distance + 0.04, 96]} />
            <meshBasicMaterial color="lightgray" />
        </mesh>
    )
}

export default OrbitCircle;
