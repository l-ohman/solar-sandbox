import React from "react";

export default function Planet({ position, color, size }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}
