import create from "zustand";

export const defaultNodes = [
  {
    id: "sun",
    type: "sun",
    position: { x: 0, y: 0 },
    className: "node",
    draggable: false,
  },
];

const useStore = create((set, get) => ({
  // Playing status
  playing: true,
  togglePlaying: () => set((state) => ({ playing: !state.playing })),

  // Nodes
  nodes: defaultNodes,
  updateNodes: (nodes) =>
    set((state) => ({
      nodes,
    })),
  newNode: {},
  addNode: (newNode) =>
    set((state) => ({
      nodes: [...state.nodes, newNode],
      newNode,
    })),

  // Edges
  edges: [],
  updateEdges: (edges) =>
    set((state) => ({
      edges,
    })),

  // Utilities
  axesVisibility: false,
  toggleAxes: () =>
    set((state) => ({
      axesVisibility: !state.axesVisibility,
    })),
  // // Would like to add 'undo' feature in the future
  // history: [],
  // updateHistory: () => {},
}));

export default useStore;
