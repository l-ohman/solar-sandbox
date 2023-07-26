import React from "react";
import { BoxGeometry, SphereGeometry } from "three";
import { useFrame } from "@react-three/fiber";
import useStore from "../../store";

export default function Moon({
  planetPosition,
  distance: distanceFromPlanet,
  speed,
  color,
  size,
}) {
  // if 'parentDistance' exists, then 'position' refers to the position of the parent
  const playing = useStore((state) => state.playing);
  const moonRef = React.useRef(null);

  const moon = React.useMemo(() => {
    const sphereGeometry = new SphereGeometry(size, 24, 24);
    sphereGeometry.translate(distanceFromPlanet, 0, 0);
    return sphereGeometry;
  }, [distanceFromPlanet]);

  useFrame(() => {
    if (moonRef) {
      const rotation = moonRef.current.rotation;
      rotation.y += speed * 0.001;
    }
  });

  return (
    <mesh position={planetPosition} ref={moonRef}>
      <primitive object={moon} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}
