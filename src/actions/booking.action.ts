"use server"
import { prisma } from "@/db/prisma";
import { revalidatePath } from "next/cache";

export async function createBooking(flightId: string, price: number) {
    const userId = "9a1a805c-a6c6-4b76-9111-ac20849c7fea";

    try {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(true)
            }, 3000)
        })

        const booking = await prisma.booking.create({
            data: {
                userId,
                flightId,
                totalPrice: price,
                status: "confirmed"
            }
        })

        revalidatePath("/")

        return { success: true, bookingId: booking.id }
    } catch (error) {
        console.error('Error al reservar:', error);
        return { success: false, error: 'Error al procesar la reserva' };
    }
}