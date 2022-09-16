import create from "zustand";

export const defaultNodes = [
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
