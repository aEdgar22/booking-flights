import { TicketsPlane } from "lucide-react"
import FlightsGrid from "./components/FlightsGrid";
import { Suspense } from "react";
import { FlightGridSkeleton } from "./loaders/FlightCardSkeleton";

export default async function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex items-center gap-2">
        <TicketsPlane className="text-blue-500 h-10 w-10" />
        <h1 className="text-2xl font-bold">Vuelos disponibles</h1>
      </div>

    <Suspense fallback={<FlightGridSkeleton />}>
      <FlightsGrid />
    </Suspense>

    </main>
  );
}
