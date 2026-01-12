"use client"

import { cn } from "@/lib/utils"
import { House, Ticket, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_ITEMS = [
    {
        id: "HOME",
        routeName: "Home",
        route: "/",
        icon: <House />
    },
    {
        id: "TICKETS",
        routeName: "My Flights",
        route: "/bookings",
        icon: <Ticket />
    },
    {
        id: "LOGIN",
        routeName: "Login",
        route: "/login",
        icon: <User />
    },

]

export const Navbar = () => {

    const path = usePathname()

    return(
        <nav className="p-8">
            <ul className="flex items-center justify-end gap-4">
                {
                    NAV_ITEMS.map(item => (
                        <Link className={cn("flex items-center gap-2 hover:text-blue-500 hover:underline", path === item.route && "text-blue-500")} href={item.route} key={item.id}>{item.icon} {item.routeName}</Link>
                    ))
                }
            </ul>
        </nav>
    )
}