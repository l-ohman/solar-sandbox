import React from "react";
import { defaultNodes } from "./defaultNodesEdges";
// import { useStore } from "../../store";

function AddNodesTab() {
    let defaultNode = defaultNodes[1];

    const handleClick = () => {
        console.log('Button clicked');
    }

    return(
        <div id="addNodesTab">
            <button onClick={handleClick}>Add planet/moon</button>
        </div>
    )
}

export default AddNodesTab;
