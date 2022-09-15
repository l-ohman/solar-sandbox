import create from "zustand";

const useStore = create((set) => ({
  playing: true,
  pauseToggle: () => set((state) => ({ playing: !state.playing })),
  planets: {
    // id: pos
  },
  updatePlanets: (id, pos) =>
    set((state) => ({
      planets: {
        ...state.planets,
        // State can't handle vectors for some reason, so it's converted to an array
        [id]: [pos.x, pos.y, pos.z],
      },
    })),
}));

export default useStore;
