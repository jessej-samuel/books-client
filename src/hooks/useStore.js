import create from "zustand";

const useStore = create((set) => ({
  flag: 1,
  update: () => set((state) => ({ flag: 1 })),
  reset: () => set((state) => ({ flag: 0 })),
}));

export default useStore;
