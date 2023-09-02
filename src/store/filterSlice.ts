import { IFilterTypes } from "@/types/filterTypes";
import { create } from "zustand";

export const useFilterStore = create<IFilterTypes>((set) => ({
  selectedSortBy: undefined,
  selectedAirlines: undefined,
  setSelectedSortBy: (sortBy) => set({ selectedSortBy: sortBy }),
  setSelectedAirlines: (airline) => set({ selectedAirlines: airline }),
}));
