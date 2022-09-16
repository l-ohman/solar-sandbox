import create from "zustand";

export const defaultNodes = [
  {
    id: "sun",
    type: "sun",
    position: { x: 0, y: 0 },
    className: "node",
    draggable: false
  },
];

const useStore = create((set, get) => ({
  // Playing status
  playing: true,
  pauseToggle: () => set((state) => ({ playing: !state.playing })),

  // Nodes
  nodes: defaultNodes,
  updateNodes: (nodes) =>
    set((state) => ({
      nodes,
    })),
  // 'newNode' is something for the Flow to watch so it knows when to render from state (as opposed to rerendering for local changes, because the local changes are sent to the state - but maybe they don't need to be?)
  newNode: {},
  addNode: (newNode) =>
    set((state) => ({
      nodes: [...state.nodes, newNode],
      newNode,
    })),

  // Edges
  edges: [],
  updateEdges: (edges) =>
    set(state => ({
      edges,
    })),
  
  // // Would like to use this to add 'undo' in the future
  // history: [],
  // updateHistory: () => {},
}));

export default useStore;
