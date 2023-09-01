import { Route, Routes } from "react-router-dom";
import Flights from "./Flights";
import Home from "./Home";
import FlightSearch from "./Home/FlightSearch/_flightSearch";

export default function Main() {
  return (
    <main className="my-16 space-y-8 ">
      <FlightSearch />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
      </Routes>
    </main>
  );
}
