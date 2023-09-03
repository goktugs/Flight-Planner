import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getAirportIATA } from "@/lib/sliceAirportIATA";
import { getAirportCountry } from "@/lib/sliceCountries";
import { useFilterStore } from "@/store/filterSlice";
import { useFlightStore } from "@/store/flightSlice";
import { IFlightsTypes } from "@/types/fligthsTypes";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { PlaneLanding, PlaneTakeoff } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function SearchedFlights() {
  // @ts-ignore next-line
  const flights = useFlightStore((state) => state.flights);

  const selectedSortBy = useFilterStore((state) => state.selectedSortBy);
  const selectedAirlines = useFilterStore((state) => state.selectedAirlines);

  const [filteredFlights, setFilteredFlights] = useState(flights);

  const { t } = useTranslation();

  useEffect(() => {
    let filteredFlightsCopy = [];

    if (flights && flights.length > 0) {
      // Veriler mevcutsa filtrelemeyi yap
      filteredFlightsCopy = [...flights];

      if (selectedAirlines && selectedAirlines.length > 0) {
        filteredFlightsCopy = filteredFlightsCopy.filter(
          (flight: IFlightsTypes) => {
            return selectedAirlines.includes(flight.airline);
          }
        );
      }

      if (selectedSortBy === "Duration") {
        filteredFlightsCopy.sort((a, b) => {
          return a.flight_length - b.flight_length;
        });
      } else if (selectedSortBy === "Low Price") {
        filteredFlightsCopy.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (selectedSortBy === "High Price") {
        filteredFlightsCopy.sort((a, b) => {
          return b.price - a.price;
        });
      } else if (selectedSortBy === "Departure Time") {
        filteredFlightsCopy.sort((a, b) => {
          return (
            new Date(a.departure_date).getTime() -
            new Date(b.departure_date).getTime()
          );
        });
      } else if (selectedSortBy === "Arrival Time") {
        filteredFlightsCopy.sort((a, b) => {
          return (
            new Date(a.arrival_date).getTime() -
            new Date(b.arrival_date).getTime()
          );
        });
      }
    }

    setFilteredFlights(filteredFlightsCopy);
  }, [flights, selectedSortBy, selectedAirlines]);

  return (
    <div className="flex-1 flex flex-col space-y-8">
      {filteredFlights?.length === 0 ? (
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="text-3xl">{t("noFlights")}</div>
          <div className="text-xl">{t("tryAnother")}</div>
          <div className="text-sm">{t("or")}</div>
          <div className="text-xl">{t("changeFilter")}</div>
          <Alert variant="destructive" className="w-80 ">
            <ExclamationTriangleIcon className="h-8 w-8" />
            <AlertTitle className="text-center">(◡︵◡)</AlertTitle>
            <AlertDescription className="text-center">
              {t("noFlightsText")}
            </AlertDescription>
          </Alert>
        </div>
      ) : (
        filteredFlights?.map((flight: IFlightsTypes) => {
          const cities = getAirportCountry(
            flight.departure_airport,
            flight.arrival_airport
          );

          const airportsIATA = getAirportIATA(
            flight.departure_airport,
            flight.arrival_airport
          );

          return (
            <div
              key={flight.id}
              className="flex flex-col border-2 border-main-black rounded-lg shadow-lg"
            >
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
                      addDays(new Date(flight.departure_date), 1),
                      "EEE, LLL dd, hh:mm a"
                    )}
                  </span>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between">
                    <span>Departure</span>
                    <span>
                      {t("flightLen")}: {flight.flight_length} hour
                    </span>
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
                      addDays(new Date(flight.updated_departure_date), 1),
                      "EEE, LLL dd, hh:mm a"
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
