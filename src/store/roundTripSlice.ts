import { IFlightsTypes } from "@/types/fligthsTypes";
import { create } from "zustand";

export const useRoundTripStore = create<{
  roundTripFlights: IFlightsTypes[];
  setRoundTripFlights: (roundTripFlights: IFlightsTypes[]) => void;
}>((set) => ({
  roundTripFlights: [],
  setRoundTripFlights: (roundTripFlights) => set({ roundTripFlights }),
}));
