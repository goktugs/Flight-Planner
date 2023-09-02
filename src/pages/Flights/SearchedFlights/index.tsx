import { getAirportIATA } from "@/lib/sliceAirportIATA";
import { getAirportCountry } from "@/lib/sliceCountries";
import { useFlightStore } from "@/store/flightSlice";
import { format } from "date-fns";
import { PlaneIcon, PlaneLanding, PlaneTakeoff } from "lucide-react";
import React from "react";

export default function SearchedFlights() {
  const flights = useFlightStore((state) => state.flights);
  console.log(flights);

  return (
    <div className="flex-1 flex flex-col space-y-8">
      {flights?.map((flight) => {
        const cities = getAirportCountry(
          flight.departure_airport,
          flight.arrival_airport
        );

        const airportsIATA = getAirportIATA(
          flight.departure_airport,
          flight.arrival_airport
        );

        return (
          <div className="flex flex-col border-2 border-main-black rounded-lg shadow-lg">
            <div className="bg-main-yellow-color flex justify-between px-8 pt-4 rounded-t-lg border-b border-black pb-4">
              <div className="flex text-lg space-x-1">
                <div>{cities.depCountry}</div>
                <span>-</span>
                <div>{cities.arrCountry}</div>
              </div>
              <div className="text-xl">Price: {flight.price}</div>
            </div>
            <div className="flex-1 bg-main-white px-2 py-4 rounded-lg flex space-x-4 ">
              <div className="flex flex-col justify-between">
                <span className="text-xs">{flight.departure_airport}</span>
                <span>
                  {format(
                    new Date(Number(flight.departure_date)),
                    "EEE, LLL dd, hh:mm a"
                  )}
                </span>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between">
                  <span>Departure</span>
                  <span>{flight.flight_length}</span>
                  <span>Arrival</span>
                </div>
                <div className="flex justify-between">
                  <PlaneTakeoff />
                  <PlaneLanding />
                </div>
                <div className="flex justify-between">
                  <span>{airportsIATA.depIATA}</span>
                  <span>{flight.airline}</span>
                  <span>{airportsIATA.arrIATA}</span>
                </div>
              </div>
              <div className="flex flex-col text-right justify-between">
                <span className="text-xs">{flight.arrival_airport}</span>
                <span>
                  {format(
                    new Date(Number(flight.arrival_date)),
                    "EEE, LLL dd, hh:mm a"
                  )}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
