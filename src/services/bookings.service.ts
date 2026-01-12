import { prisma } from "@/db/prisma"

export const getBookingsByUser = async (userId: string)=>{
    
    const bookingsRaw = await prisma.booking.findMany({
        where: {
            userId: userId
        },
        include: {
            flight: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return bookingsRaw.map((booking) => ({
        ...booking,
        totalPrice: booking.totalPrice.toNumber(),
    }))
}