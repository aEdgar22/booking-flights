import { Calendar, Plane } from "lucide-react"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { IFlight } from "@/types/flight.types"
import { BookingButton } from "./BookingButton"

export const FlightCard = ({ flight }: { flight: IFlight }) => {
  return (
    <Card className="w-[400px] h-auto px-4 hover:shadow-lg transition-shadow border-slate-200">
      <CardHeader className="p-0">
        <div className="flex items-center gap-2">
          <Badge>{flight.code}</Badge>
          <span className="text-xl font-bold text-green-800">
            ${flight.price}
          </span>
        </div>
      </CardHeader>

      <CardTitle className="flex items-center gap-2">
        {flight.origin}
        <Plane className="text-blue-500 h-5 w-5" />
        {flight.destination}
      </CardTitle>

      <CardContent className="flex items-center gap-2 p-0">
        <Calendar className="text-blue-500 h-5 w-5" />
        <span>
          {flight.departure.toLocaleDateString()} - {flight.departure.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </CardContent>

      <CardFooter>
        <BookingButton flightId={flight.id} price={flight.price} />
      </CardFooter>
    </Card>
  )
}