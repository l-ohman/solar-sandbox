import React from "react";
import ReactFlow, { Background, applyNodeChanges, applyEdgeChanges, addEdge } from "react-flow-renderer";
import { FlowControls, AddNodesTab, nodeTypes } from "./";
import useStore, { defaultNodes } from "../../store";
// import { defaultNodes, defaultEdges } from "./defaultNodesEdges";

function Flow() {
    const newNode = useStore(state => state.newNode);
    const updateNodes = useStore(state => state.updateNodes);
    const updateEdges = useStore(state => state.updateEdges)

    const [nodes, setNodes] = React.useState(defaultNodes);
    const [edges, setEdges] = React.useState([]);

    // This should be refactored... the store shouldn't need the position of these elements, it should only need the structure
    const onNodesChange = React.useCallback((changes) => {
        setNodes((nodes) => {
            const updated = applyNodeChanges(changes, nodes);
            updateNodes(updated);
            return updated;
        });
        }, [setNodes]
    );
    const onEdgesChange = React.useCallback((changes) => {
        setEdges((edges) => {
            const updated = applyEdgeChanges(changes, edges);
            updateEdges(updated);
            return updated;
        });
        }, [setEdges]
    )

    // Updates display when item added via 'add planet' button
    React.useEffect(() => {
        if (newNode.position) {
            setNodes([...nodes, newNode]);
        }
    }, [newNode])

    // For connecting nodes
    const onConnect = React.useCallback(
        (connection) => setEdges((edges) => {
            let updated = addEdge(connection, edges);
            updateEdges(updated);
            return updated;
        }), [setEdges]
    );

    const gridGap = 20;
    let flowProps = {
        nodes: nodes,
        edges: edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        nodeTypes,
        fitView: true,
        fitViewOptions: { padding: 1 },
        // snapToGrid: true,
        // snapGrid: 1,
    }

    // temp utility - passing this to addNodes tab
    const stateLog = {
        nodes,
        edges,
    }

    return (
        <div className="half left">
            <AddNodesTab {...stateLog} />
            <ReactFlow {...flowProps}>
                <FlowControls />
                <Background color="#000" gap={gridGap} />
            </ReactFlow>
        </div>
    )
}

export default Flow;
