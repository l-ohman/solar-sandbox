import React from "react";
import { AxesHelper } from "three";

export function AxesDisplay({ length }) {
    // x=red y=green z=blue
    const helper = new AxesHelper(length);
    return <primitive object={helper} />;
}

// 'speed' expressed as angular distance
export function orbitCalculator(distance, currentPosition, speed = 1) {
    speed = speed * 0.001;
    let angle = Math.atan2(currentPosition.x, currentPosition.z);
    let x = Math.sin(angle + speed) * distance;
    let z = Math.cos(angle + speed) * distance;
    return [x, z];
}

// Returns a vector - starts planet at ( x=1 || x=-1 || z=1 || z=-1 ) instead of placing each one at x=1
export function randomStartingPosition(distance) {
    let num = Math.random();
    if (num > 0.75) {
        return [distance, 0, 0];
    } else if (num > 0.5) {
        return [-distance, 0, 0];
    } else if (num > 0.25) {
        return [0, 0, distance]
    } else {
        return [0, 0, -distance];
    }
}
