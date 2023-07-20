import { create } from "zustand";

export const defaultNodes = [
  {
    id: "sun",
    type: "sun",
    position: { x: 0, y: 0 },
    className: "node",
  },
];

export default create((set, get) => ({
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

  clearAll: () =>
    set((state) => ({
      nodes: defaultNodes,
      edges: [],
      newNode: { clear: true },
    })),

  // // Would like to add 'undo' feature in the future
  // history: [],
  // updateHistory: () => {},
}));
