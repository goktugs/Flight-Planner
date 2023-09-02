import { IAirport } from "@/types/fligthSearch";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// export const useFlightStore = create((set) => ({
//   flights: [],
//   setFlights: (flights: IAirport) => set({ flights }),
// }));

export const useFlightStore = create(
  persist(
    (set, get) => ({
      flights: [],
      setFlights: (flights: IAirport) => set({ flights }),
    }),
    {
      name: "flight-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
