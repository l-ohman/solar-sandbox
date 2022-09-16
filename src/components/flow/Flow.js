import React from "react";
import ReactFlow, { Background, applyNodeChanges, applyEdgeChanges, addEdge } from "react-flow-renderer";
import { FlowControls, AddNodesTab, nodeTypes } from "./";
import useStore from "../../store";
// import { defaultNodes, defaultEdges } from "./defaultNodesEdges";

function Flow() {
    const nodesStore = useStore(state => state.nodes);
    const edgesStore = useStore(state => state.edges);
    const updateNodes = useStore(state => state.updateNodes);

    // Hooks to handles movement/selection - might have to remove these to do custom callbacks
    // const [nodes, setNodes, onNodesChange] = useNodesState(nodesStore);
    // const [edges, setEdges, onEdgesChange] = useEdgesState(edgesStore);

    const [nodes, setNodes] = React.useState(nodesStore);
    const [edges, setEdges] = React.useState(edgesStore);

    const onNodesChange = React.useCallback((changes) => {
        setNodes((nodes) => {
            let updated = applyNodeChanges(changes, nodes);
            updateNodes(updated);
            return updated;
        });
        }, [setNodes]
    );
    const onEdgesChange = React.useCallback((changes) => {
        setEdges((edges) => {
            applyEdgeChanges(changes, edges)
        });
        }, [setEdges]
    )

    // Updates display when item added via 'add planet' button
    React.useEffect(() => {
        setNodes(nodesStore);
    }, [nodesStore.length])

    // For connecting nodes
    const onConnect = React.useCallback(
        (connection) => setEdges((edges) => addEdge(connection, edges)),
        [setEdges]
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

    return (
        <div className="half left">
            <AddNodesTab />
            <ReactFlow {...flowProps}>
                <FlowControls />
                <Background color="#000" gap={gridGap} />
            </ReactFlow>
        </div>
    )
}

export default Flow;
