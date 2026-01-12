import { getFlights } from "@/services/flight.service";
import { IFlight } from "@/types/flight.types";
import { FlightCard } from "./FlightCard";

export default async function FlightsGrid() {
  const flights: IFlight[] = await getFlights();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        flights.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))
      }
    </div>
  );
}