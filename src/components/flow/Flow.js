import React from "react";
import ReactFlow, { Background, useNodesState, useEdgesState } from "react-flow-renderer";
import { FlowControls, nodeTypes } from ".";
import useStore from "../../store";
import { defaultNodes, defaultEdges } from "./defaultNodesEdges";

function Flow() {
    const state = useStore(state => state);

    // Hooks to handles movement/selection
    const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);

    let flowProps = {
        nodes: nodes,
        edges: edges,
        onNodesChange,
        onEdgesChange,
        nodeTypes,
        fitView: true
    }

    return (
        <div className="half left">
            <ReactFlow {...flowProps}>
                <FlowControls />
                <Background color="#000" gap={20} />
            </ReactFlow>
        </div>
    )
}

export default Flow;
