import { useEffect } from "react";
import Filter from "./Filter";
import SearchedFlights from "./SearchedFlights";
import { useLocation } from "react-router-dom";

export default function Flights() {
  const { state } = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    if (targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [targetId]);

  return (
    <main
      id="flightsSection"
      className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10"
    >
      <Filter />
      <SearchedFlights />
    </main>
  );
}
