import { create } from "zustand";

type ScrollStore = {
  pageYOffset: number;
  setPageYOffset: (offset: number) => void;
};

export const useScrollStore = create<ScrollStore>((set) => ({
  pageYOffset: 0,
  setPageYOffset: (offset) => set({ pageYOffset: offset }),
}));
