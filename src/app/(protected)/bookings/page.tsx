import BookingsList from "@/app/components/BookingsList";
import { BookingsListSkeleton } from "@/app/loaders/BookingsListSkeleton";
import { Ticket } from "lucide-react";
import { Suspense } from "react";

export default async function Bookings() {

    return (
       <main className="container mx-auto py-10 px-6">
            <div className="flex items-center gap-2 mb-8">
                <Ticket className="h-10 w-10 text-slate-600" />
                <h1 className="text-2xl font-bold">Mis vuelos</h1>
            </div>

            <Suspense fallback={<BookingsListSkeleton />}>
                <BookingsList />
            </Suspense>
        </main>
    )
}