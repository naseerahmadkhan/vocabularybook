// store.js
import {create }from 'zustand';

const useStore = create((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (index) =>
    set((state) => ({
      items: state.items.filter((_, i) => i !== index),
    })),
  updateItem: (index, updatedItem) =>
    set((state) => ({
      items: state.items.map((item, i) => (i === index ? updatedItem : item)),
    })),
}));



export default useStore;
