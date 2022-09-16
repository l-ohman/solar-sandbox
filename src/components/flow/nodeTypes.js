// Custom Nodes
import React from "react";
import { Handle, Position } from 'react-flow-renderer';

// 'Handle' components allow node connections
// 'Position' lets us set the location of the connection point

function SunNode() {
    return(
        <>
            <div>
                <h2>the sun</h2>
                <p>{"{form for controls}"}</p>
            </div>
            <Handle type="source" position={Position.Bottom} />
        </>
    )
}

function PlanetNode({ data }) {
    return(
        <>
            <Handle type="target" position={Position.Top} />
            <div>
                <h3>planet!</h3>
                <p>{"{form for controls}"}</p>
            </div>
            <Handle type="source" position={Position.Bottom}/>
        </>
    )
};

function MoonNode({ data }) {
    return(
        <>
            <div>
                <h3>moon</h3>
                <p>{"{form for controls}"}</p>
                <p>{data ? data : "no data found"}</p>
            </div>        
            <Handle type="target" position={Position.Top} />
        </>
    )
}

export default {
    sun: SunNode,
    planet: PlanetNode,
    moon: MoonNode,
}
