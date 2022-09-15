import create from 'zustand';

const useStore = create((set) => ({
    playing: true,
    pauseToggle: () => set(state => ({ playing: !state.playing })),
}))

export default useStore;
