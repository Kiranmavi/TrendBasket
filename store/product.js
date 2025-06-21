import { create } from 'zustand';

const useProductStore = create((set) => ({
  selectedId: null,
  setSelectedId: (id) => set({ selectedId: id }),
  clearSelectedId: () => set({ selectedId: null }),
}));

export default useProductStore;