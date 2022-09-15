import create from "zustand";

const useStore = create((set) => ({
  playing: true,
  pauseToggle: () => set((state) => ({ playing: !state.playing })),
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
