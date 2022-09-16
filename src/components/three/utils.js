import React from "react";
import { AxesHelper } from "three";

export function AxesDisplay({ length }) {
  // x=red y=green z=blue
  const helper = new AxesHelper(length);
  return <primitive object={helper} />;
}

// inputs are inconsistent - 'currentPos' is a Vector3, but 'parentPos' is an array
export function orbitCalculator(
  distance,
  currentPos,
  speed = 1, // 'speed' expressed as angular distance
  parentPos = [0, 0, 0]
) {
  // Should fix the planet 'speeding up' as it is closer to center
  let angle = Math.atan2(
    currentPos[0] - parentPos[0],
    currentPos[2] - parentPos[2]
  );
  speed = speed * 0.001;

  let x = Math.sin(angle + speed) * distance + parentPos[0];
  let z = Math.cos(angle + speed) * distance + parentPos[2];
  return [x, 0, z];
}

// Returns a vector - starts planet at ( x=1 || x=-1 || z=1 || z=-1 ) instead of placing each one at x=1
// export function randomStartingPosition(distance) {
//   let num = Math.random();
//   if (num > 0.75) {
//     return [distance, 0, 0];
//   } else if (num > 0.5) {
//     return [-distance, 0, 0];
//   } else if (num > 0.25) {
//     return [0, 0, distance];
//   } else {
//     return [0, 0, -distance];
//   }
// }

export function restructureStoreData(nodes, edges) {
  let output = [];

  // get all planets connected to sun
  edges.forEach((edge) => {
    if (edge.source === "sun") {
      let planet = nodes.find((node) => node.id === edge.target);
      planet.moons = [];
      output.push(planet);
    }
  });

  // get all moons connected to each planet
  edges.forEach((edge) => {
    if (edge.source !== "sun") {
      let moon = nodes.find((node) => node.id === edge.target);
      let planet = output.find((node) => node.id === edge.source);
      if (planet.moons) {
        planet.moons.push(moon);
      }
    }
  });

  return output;
}
