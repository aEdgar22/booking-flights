import { prisma } from "@/src/db/prisma";
import { NextResponse } from "next/server";


export async function GET(){
    try {
        const flights = await prisma.flight.findMany({
            orderBy:{
                departure: 'asc'
            }
        })

        return NextResponse.json(flights, {status: 200})

    } catch (error) {
        console.error('Error al obtener los vuelos',error)
        return NextResponse.json({error: 'Error al obtener los vuelos'}, {status: 500})
    }
}