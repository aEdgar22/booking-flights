import { prisma } from "../db/prisma"

export const getFlights = async () => {

    const flightsRaw = await prisma.flight.findMany({
        orderBy: {
            departure: 'asc'
        }
    })

    return flightsRaw.map((flight) => ({
        ...flight,
        price: flight.price.toNumber(),
    }))
}