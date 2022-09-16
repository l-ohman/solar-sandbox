import React from "react";
// import { defaultNodes } from "./defaultNodesEdges";
import useStore from "../../store";

function generateId() {
    // will have 'outer' id for nodes (flow), but 'inner' id (in 'data') for planets (three)
    return Math.random().toPrecision(5);
}

const defaultPlanet = (id) => ({
    id,
    type: 'planet',
    position: {x:0, y:85},
    className: 'node',
    data: {
        id,
        color: 'blue',
        size: 1,
        distance: Math.ceil(Math.random()*50),
        speed: 10,
    }
}); 

const defaultMoon = (id) => ({
    id,
    type: 'moon',
    position: {x:0, y:100},
    className: 'node',
    data: {
        id,
        color: 'red',
        size: 1,
        distance: Math.ceil(Math.random()*7),
        speed: 75
    }
})

function AddNodesTab({ nodes, edges }) {
    const addNode = useStore(state => state.addNode);

    const handleClick = (e) => {
        let newNode;
        let id = generateId();
        if (e.target.id === "addPlanet") {
            newNode = defaultPlanet(id);
        } else {
            newNode = defaultMoon(id);
        }
        addNode(newNode); 
    }

    const logState = () => {
        console.log('Nodes:', nodes)
        console.log('Edges:', edges)
    }
    return(
        <div id="addNodesTab">
            <button id="addPlanet" onClick={handleClick}>Add planet</button>
            <button id="addMoon" onClick={handleClick}>Add moon</button>
            <button onClick={logState}>Log state</button>
        </div>
    )
}

export default AddNodesTab;
