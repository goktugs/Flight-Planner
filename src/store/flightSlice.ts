import { IAirport } from "@/pages/Home/FlightSearch/fligthSearch";
import { create } from "zustand";

export const useFlightStore = create((set) => ({
  flights: [],
  setFlights: (flights: IAirport) => set({ flights }),
}));
