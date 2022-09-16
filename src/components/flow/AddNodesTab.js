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

function AddNodesTab() {
    const addNode = useStore(state => state.addNode);

    const handleClick = (e) => {
        let id = generateId();
        if (e.target.id) {
            console.log(e.target.id)
        }
        let newNode = defaultPlanet(id);
        addNode(newNode); 
    }

    return(
        <div id="addNodesTab">
            <button id="addPlanet" onClick={handleClick}>Add planet/moon</button>
        </div>
    )
}

export default AddNodesTab;
