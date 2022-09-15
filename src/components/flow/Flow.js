import React from "react";
import ReactFlow, { Background, useNodesState, useEdgesState, addEdge } from "react-flow-renderer";
import { FlowControls, AddNodesTab, nodeTypes } from "./";
import useStore from "../../store";
import { defaultNodes, defaultEdges } from "./defaultNodesEdges";

function Flow() {
    const updateSystem = useStore(state => state.updateSystem);

    // Hooks to handles movement/selection
    const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);

    // For connecting nodes
    const onConnect = React.useCallback(
        (connection) => setEdges((edges) => addEdge(connection, edges)),
        [setEdges]
    );

    let flowProps = {
        nodes: nodes,
        edges: edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        nodeTypes,
        fitView: true,
        fitViewOptions: { padding: 1 }
    }

    console.log('nodes:')
    console.dir(nodes)

    return (
        <div className="half left">
            <AddNodesTab />
            <ReactFlow {...flowProps}>
                <FlowControls />
                <Background color="#000" gap={20} />
            </ReactFlow>
        </div>
    )
}

export default Flow;
