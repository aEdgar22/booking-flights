import { getBookingsByUser } from "@/services/bookings.service";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export default async function BookingsList() {
  const userId = "5e9e2033-cbf5-4cfa-9e9a-7c1647462bf6"; 
  
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const bookings = await getBookingsByUser(userId);

  if (bookings.length === 0) {
    return (
      <div className="py-10 text-center border rounded-lg bg-slate-50">
        <p className="text-slate-600 mb-4">No tienes vuelos activos</p>
        <Link href="/">
          <Button className="bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-800">
            Buscar vuelos
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {bookings.map((booking) => (
        <Card key={booking.id} className="border-l-4 border-l-blue-600">
            {/* ... TU CÓDIGO DE TARJETA EXACTO ... */}
             <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                        <Badge variant="outline" className="text-xs">
                            {booking.status.toUpperCase()}
                        </Badge>
                        <span>Reserva: #{booking.id.slice(0, 8)}...</span>
                    </div>

                    <div className="flex items-center gap-4 text-2xl font-bold text-slate-800">
                        <span>{booking.flight.origin}</span>
                        <ArrowRight className="text-slate-400 h-6 w-6" />
                        <span>{booking.flight.destination}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-sm text-slate-600 md:border-l md:pl-6 md:border-slate-100">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-500" />
                        {booking.flight.departure.toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-blue-500" />
                        {booking.flight.departure.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                </div>

                <div className="md:text-right">
                    <p className="text-xs text-slate-400 uppercase">Total Pagado</p>
                    <p className="text-xl font-bold text-green-700">
                        ${booking.totalPrice.toString()}
                    </p>
                </div>
            </CardContent>
        </Card>
      ))}
    </div>
  );
}