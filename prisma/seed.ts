import { prisma } from "../src/db/prisma"

async function main() {
    console.log('🌱 Empezando el seed...')

    try {
        await prisma.booking.deleteMany()
        await prisma.flight.deleteMany()
        await prisma.user.deleteMany()
        console.log('🗑️  Datos previos eliminados')

        const usersData = [
            {
                name: 'John Doe',
                email: 'john.doe@example.com',
                password: 'password123',
            },
        ]

        const flightsData = [
            {
                code: 'AV001',
                origin: 'MDE',
                destination: 'MIA',
                price: 450.00,
                seats: 150,
                departure: new Date('2024-12-10T10:00:00Z'),
            },
            {
                code: 'IB6500',
                origin: 'BOG',
                destination: 'MAD',
                price: 920.50,
                seats: 280,
                departure: new Date('2024-12-12T18:30:00Z'),
            },
            {
                code: 'AA1120',
                origin: 'MDE',
                destination: 'JFK',
                price: 550.00,
                seats: 180,
                departure: new Date('2024-12-15T08:00:00Z'),
            }
        ]

        for (const user of usersData) {
            const created = await prisma.user.create({
                data: user
            })
            console.log(`👤 Usuario creado: ${created.name}`)
        }

        for (const flight of flightsData) {
            const created = await prisma.flight.create({
                data: flight
            })
            console.log(`✈️  Vuelo creado: ${created.code}`)
        }

        console.log('✅ Seeding completado exitosamente')

    } catch (error) {
        console.error('❌ Error durante el seed:', error)
        process.exit(1)
    } finally {
        await prisma.$disconnect()
    }
}

main()