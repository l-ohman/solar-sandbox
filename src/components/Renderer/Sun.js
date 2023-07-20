import React from "react";
import { useFrame } from "@react-three/fiber";
import useStore from "../../store";

export default function Sun() {
  const togglePlaying = useStore((state) => state.togglePlaying);
  const ref = React.useRef();
  const [hovered, setHovered] = React.useState(false);

  const rotation = 0.003;
  useFrame(() => {
    ref.current.rotation.x += rotation / 7;
    ref.current.rotation.y += rotation;
    ref.current.rotation.z += rotation / 9;
  });

  return (
    <mesh
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={togglePlaying}
    >
      <sphereGeometry args={[4, 12, 12]} />
      <meshStandardMaterial
        emissive="gold"
        emissiveIntensity={hovered ? 2 : 1.1}
      />
    </mesh>
  );
}
