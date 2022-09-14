import React from "react";
import ReactFlow, { Background } from "react-flow-renderer";

function Flow() {


    // Reminder that the 'React Flow' link is still on top of the footer
    return (
        <div className="half left">
            <ReactFlow>
                <Background color="#000" gap={15} />
            </ReactFlow>
        </div>
    )
}

export default Flow;
