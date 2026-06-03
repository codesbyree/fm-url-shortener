import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { ShortenUrl } from "../types/shortener.types";

interface Store {
  shortenUrls: ShortenUrl[];
  addShortenUrl: (val: ShortenUrl) => void;
}

export const useUrlShortener = create<Store>()(
  persist(
    (set, get) => ({
      shortenUrls: [],
      addShortenUrl: (val: ShortenUrl) => set({ shortenUrls: [val, ...get().shortenUrls] }),
    }),
    {
      name: "shortened-url",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        shortenUrls: state.shortenUrls,
      }),
    },
  ),
);
