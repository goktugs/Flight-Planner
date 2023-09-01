import React from "react";
import Filter from "./Filter";
import SearchedFlights from "./SearchedFlights";

export default function Flights() {
  return (
    <main className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
      <Filter />
      <SearchedFlights />
    </main>
  );
}
