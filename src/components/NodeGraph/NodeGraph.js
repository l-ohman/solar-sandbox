import React from "react";
import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "react-flow-renderer";
import { ButtonsContainer, nodeTypes } from "./";
import useStore, { defaultNodes } from "../../store";

export default function NodeGraph() {
  const newNode = useStore((state) => state.newNode);
  const updateNodes = useStore((state) => state.updateNodes);
  const updateEdges = useStore((state) => state.updateEdges);

  // 'nodes' and 'edges' as stored in react-flow graph
  const [nodes, setNodes] = React.useState(defaultNodes);
  const [edges, setEdges] = React.useState([]);

  const onNodesChange = React.useCallback(
    (changes) => {
      setNodes((nds) => {
        const updatedNodes = applyNodeChanges(changes, nds);
        if (changes[0].type !== "position" && changes[0].type !== "select") {
          updateNodes(updatedNodes);
        }
        return updatedNodes;
      });
    },
    [setNodes]
  );
  const onEdgesChange = React.useCallback(
    (changes) => {
      setEdges((eds) => {
        const updatedEdges = applyEdgeChanges(changes, eds);
        if (changes[0].type === "remove") {
          updateEdges(updatedEdges);
        }
        return updatedEdges;
      });
    },
    [setEdges]
  );

  // Updates display when item added via 'add planet' button, also handles clearing system
  React.useEffect(() => {
    if (newNode.position) {
      let nodesStore = useStore.getState().nodes;
      // syncs local state with global state (data was resetting)
      let fixedNodes = nodes.map((node) => {
        let nodeInStore = nodesStore.find((itm) => itm.id === node.id);
        node.data = nodeInStore.data;
        return node;
      });
      setNodes([...fixedNodes, newNode]);

      // can just wrap this in an if-statement later if user wants to disable auto-connections
      let newEdge;
      if (newNode.parent === null) {
        newEdge = {
          id: `reactflow__edge-sun-${newNode.id}`,
          source: "sun",
          target: newNode.id,
        };
      } else {
        newEdge = {
          id: `reactflow__edge-${newNode.parent}-${newNode.id}`,
          source: newNode.parent,
          target: newNode.id,
        };
      }
      const updatedEdges = addEdge(newEdge, edges);
      updateEdges(updatedEdges);
      setEdges(updatedEdges);
    } else if (newNode.clear) {
      setNodes(defaultNodes);
      setEdges([]);
    }
  }, [newNode]);

  const onConnect = React.useCallback(
    (connection) =>
      setEdges((eds) => {
        let updatedEdges = addEdge(connection, eds);
        updateEdges(updatedEdges);
        return updatedEdges;
      }),
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
    fitViewOptions: { padding: 5 },
    // snapToGrid: true,
    // snapGrid: 1,
  };

  // temp utility - passing this to addNodes tab
  const stateLog = {
    nodes,
    edges,
  };

  return (
    <div className="half left">
      <ButtonsContainer {...stateLog} />
      <ReactFlow {...flowProps}>
        <Controls showZoom={true} showFitView={true} showInteractive={false} />
        <Background color="#000" gap={gridGap} />
      </ReactFlow>
    </div>
  );
}
