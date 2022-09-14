import React from "react";
import ReactFlow, { Background, useNodesState, useEdgesState } from "react-flow-renderer";
import { FlowControls, CustomNode } from "./";

const nodeTypes = { custom: CustomNode }

function Flow() {
    const testNodes = [
        {
            id: '1',
            type: 'custom',
            position: {x:0, y:0},
            data: 'Test node',
        }
    ]

    const [nodes, setNodes, onNodesChange] = useNodesState(testNodes);
    const [edges, setEdges, setEdgesChange] = useEdgesState();

    let flowProps = {
        nodes: testNodes,
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
