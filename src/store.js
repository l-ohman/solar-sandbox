import create from "zustand";

const defaultNodes = [
  {
    id: "sun",
    type: "sun",
    position: { x: 0, y: 0 },
    className: "node",
  },
];

const useStore = create((set, get) => ({
  // Playing status
  playing: true,
  pauseToggle: () => set((state) => ({ playing: !state.playing })),

  // Nodes
  nodes: defaultNodes,
  addNode: (newNode) =>
    set((state) => ({
      nodes: [...state.nodes, newNode],
    })),
  updateNodes: (nodes) =>
    set((state) => ({
      nodes,
    })),
  // Edges
  edges: [],

  // Planet positions - should refactor so position is not stored here (seems unnecessarily CPU-intensive)
  planetPositions: {
    // id: pos
  },
  updatePlanetPositions: (id, pos) =>
    set((state) => ({
      planetPositions: {
        ...state.planetPositions,
        // State can't handle vectors for some reason (probably user error), so it's converted to an array
        [id]: [pos.x, pos.y, pos.z],
      },
    })),
}));

export default useStore;
