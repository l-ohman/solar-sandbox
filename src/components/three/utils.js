import React from "react";
import useStore from "../../store";
import { AxesHelper } from "three";

export function AxesDisplay() {
  // x=red y=green z=blue
  const helper = new AxesHelper(200);
  const axesVisibility = useStore((state) => state.axesVisibility);
  // should dispose of this instead of just making it invisible
  return <primitive object={helper} visible={axesVisibility}/>;
}

export function orbitCalculator(
  distance,
  currentPos,
  speed = 1, // 'speed' expressed as angular distance
  parentPos = [0, 0, 0]
) {
  // still need to fix the planet 'speeding up' when it is closer to center of system
  let angle = Math.atan2(
    currentPos[0] - parentPos[0],
    currentPos[2] - parentPos[2]
  );
  speed = speed * 0.001;

  let x = Math.sin(angle + speed) * distance + parentPos[0];
  let z = Math.cos(angle + speed) * distance + parentPos[2];
  return [x, 0, z];
}

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

  console.log('output: ', output)
  return output;
}
