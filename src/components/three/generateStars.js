import React from "react";
import { useFrame } from "@react-three/fiber";

function generateStars(count = 50) {

  let generateStarPosition = () => {
    let [x, y, z] = [
      Math.random() * 200,
      Math.random() * 150,
      Math.random() * 200,
    ];

    if (x < 90 && y < 50 && z < 90) {
      if (Math.random() > 0.5) {
        x = 100 + Math.random * 75;
      } else {
        z = 100 + Math.random * 75;
      }
    }

    if (Math.random() > 0.5) {
      x = -x;
    }
    if (Math.random() > 0.5) {
      y = -y;
    }
    if (Math.random() > 0.5) {
      z = -z;
    }
    return [x, y, z];
  };

  let allStars = [];
  for (let i = 0; i < count; i++) {
    let star = {
      position: generateStarPosition(),
      color: Math.random() < 0.66 ? "gray" : "darkgray"
    }
    allStars.push(star);
  }
  return allStars;
}

export default generateStars;
