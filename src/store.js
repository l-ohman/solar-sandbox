import create from "zustand";

const useStore = create((set) => ({
  playing: true,
  pauseToggle: () => set((state) => ({ playing: !state.playing })),
  system: [
    //planetObjs with 'moons' prop which is an array of moon
  ],
  updateSystem: () => set(state => ({

  })),
  // Should refactor planets so position is not stored here (this method seems unnecessarily CPU-intensive)
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
