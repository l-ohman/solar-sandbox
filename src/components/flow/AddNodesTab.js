import React from "react";
// import { defaultNodes } from "./defaultNodesEdges";
import useStore from "../../store";

function generateId() {
    // will have 'outer' id for nodes (flow), but 'inner' id (in 'data') for planets (three)
    return Math.random().toPrecision(5);
}

const defaultNode = (id) => ({
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

function AddNodesTab() {
    const addNode = useStore(state => state.addNode);

    const handleClick = () => {
        // nodes.forEach(itm => console.log(itm.position))
        let id = generateId();
        let newNode = defaultNode(id);
        addNode(newNode); 
    }

    return(
        <div id="addNodesTab">
            <button onClick={handleClick}>Add planet/moon</button>
        </div>
    )
}

export default AddNodesTab;
