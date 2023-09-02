import { IAirport } from "@/types/fligthSearch";
import { create } from "zustand";

export const useFlightStore = create(
  (
    set
  ): { airports: IAirport[]; setAirports: (airports: IAirport[]) => void } => ({
    airports: [],
    setAirports: (airports: IAirport[]) => set({ airports }),
  })
);
