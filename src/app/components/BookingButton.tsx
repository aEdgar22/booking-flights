"use client"

import { createBooking } from "@/actions/booking.action";
import { useState, useTransition } from "react";
import { Button } from "./ui/button";
import { CheckCircle2, Loader2 } from "lucide-react";

interface BookingButtonProps {
    flightId: string;
    price: number;
}

export function BookingButton({ flightId, price }: BookingButtonProps) {

    const [isPending, startTransition] = useTransition();
    const [isSuccess, setIsSuccess] = useState(false);


    const handleBooking = async () => {
        startTransition(async () => {
            const response = await createBooking(flightId, price);

            if (response.success) {
                setIsSuccess(true)
                setTimeout(() => setIsSuccess(false), 3000);
            } else {
                alert('Hubo un error en la reserva');
            }
        })
    }

    if (isSuccess) {
        return (
            <Button className="w-full bg-green-600 hover:bg-green-700 cursor-default">
                <CheckCircle2 className="mr-2 h-4 w-4" /> Reservado
            </Button>
        )
    }

    return (

        <Button
            onClick={handleBooking}
            disabled={isPending}
            className="w-full bg-slate-900 hover:bg-slate-800 cursor-pointer"
        >
            {isPending ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Procesando...
                </>
            ) : (
                'Reservar Asiento'
            )}
        </Button>

    )

}