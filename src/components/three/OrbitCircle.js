import React from "react";

// 'sign' as +1/-1 for multiplying rotation (need 2 orbit circles)
function OrbitCircle({ distance }) {
    const ref = React.useRef();
    const [visibility, setVisibility] = React.useState(false);
    
    React.useEffect(() => {
        if (ref.current) {
            ref.current.rotation.x = Math.PI / 2;
            setVisibility(true);
        }
    }, [ref.current])

    return(
        <mesh ref={ref} visible={visibility}>
            <torusGeometry args={[distance, 0.08, 2, 48]} />
            <meshBasicMaterial color="gray" />
        </mesh>
    )
}

export default OrbitCircle;
