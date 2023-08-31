import Home from "./Home";
import FlightSearch from "./Home/_flightSearch";

export default function Main() {
  return (
    <main className="my-16 space-y-8 ">
      <FlightSearch />
      <Home />
    </main>
  );
}
