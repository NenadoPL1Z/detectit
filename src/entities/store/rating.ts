import { create } from "zustand";
import { GameModel } from "@shared/types";

type RatingStore = {
  pageYOffset: number;
  search: string;
  games: GameModel[];
  loading: boolean;
  error: string;
  page: number;
  setSearch: (search: string) => void;
  incrementPage: () => void;
  resetPage: () => void;
  setStore: (store: Partial<RatingStore>) => void;
  setPageYOffset: (offset: number) => void;
};

export const useRatingStore = create<RatingStore>((set) => ({
  pageYOffset: 0,
  search: "",
  games: [],
  loading: true,
  error: "",
  page: 1,
  setStore: (store) => set(store),
  setSearch: (search) => set({ search }),
  resetPage: () => set({ page: 1 }),
  incrementPage: () => set((state) => ({ page: state.page + 1 })),
  setPageYOffset: (offset) => set({ pageYOffset: offset }),
}));
