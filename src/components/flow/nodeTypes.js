import React from "react";
import { Handle, Position } from 'react-flow-renderer';
import { EditPlanetForm } from "./"

// 'Handle' components allow node connections
// 'Position' lets us set the location of the connection point

function SunNode() {
    return(
        <>
            <h1>sun</h1>
            <Handle type="source" position={Position.Bottom} />
        </>
    )
}

function PlanetNode({ data }) {
    return(
        <>
            <Handle type="target" position={Position.Top} />
            <div className="editFormContainer">
                <h2>{data.id}</h2>
                <EditPlanetForm {...data}/>
            </div>
            <Handle type="source" position={Position.Bottom}/>
        </>
    )
};

function MoonNode({ data }) {
    return(
        <>
            <div className="editFormContainer">
                <h3>{data.id}</h3>
                <EditPlanetForm {...data}/>
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
