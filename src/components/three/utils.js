import React from "react";
import { AxesHelper } from "three";

export function AxesDisplay({ length }) {
    // x=red y=green z=blue
    const helper = new AxesHelper(length);
    return <primitive object={helper} />;
}
