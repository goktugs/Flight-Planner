import { IFlightsTypes } from "@/types/fligthsTypes";
import { create } from "zustand";

export const useFlightStore = create<{
  flights: IFlightsTypes[];
  setFlights: (flights: IFlightsTypes[]) => void;
}>((set) => ({
  flights: [],
  setFlights: (flights) => set({ flights }),
}));
