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
    className: 'node planetNode',
    data: {
        id,
        color: '#2065E0',
        size: 1,
        distance: Math.ceil(Math.random()*15)+7,
        speed: 10,
    }
}); 

const defaultMoon = (id) => ({
    id,
    type: 'moon',
    position: {x:0, y:100},
    className: 'node moonNode',
    data: {
        id,
        color: '#E52626',
        size: 0.5,
        distance: Math.ceil(Math.random()*4)+2,
        speed: 100
    }
})

function ButtonsContainer({ nodes, edges }) {
    const addNode = useStore(state => state.addNode);
    const toggleAxes = useStore(state => state.toggleAxes);

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
    const toggleButton = () => {
        toggleAxes();
    }

    return(
        <div id="addNodesTab">
            <button id="addPlanet" onClick={handleClick}>Add planet</button>
            <button id="addMoon" onClick={handleClick}>Add moon</button>
            <button onClick={logState}>Log state</button>
            <button onClick={toggleButton}>Toggle axes</button>
        </div>
    )
}

export default ButtonsContainer;
