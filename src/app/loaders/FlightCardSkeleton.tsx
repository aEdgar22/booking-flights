import { Card, CardContent, CardFooter, CardHeader } from "@/app/components/ui/card"
import { Skeleton } from "@/app/components/ui/skeleton"

export function FlightCardSkeleton() {
  return (
    <Card className="w-[400px] h-auto px-4 border-slate-200">
      <CardHeader className="p-0 mt-4">
        <div className="flex items-center gap-2 justify-between">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20" />
        </div>
      </CardHeader>

      <div className="py-4">
        <Skeleton className="h-8 w-3/4 mb-2" />
      </div>

      <CardContent className="flex items-center gap-2 p-0 mb-4">
        <Skeleton className="h-5 w-5 rounded-full" />
        <Skeleton className="h-5 w-1/2" />
      </CardContent>

      <CardFooter className="p-0 mb-4">
        <Skeleton className="h-10 w-full rounded-md" />
      </CardFooter>
    </Card>
  )
}


export function FlightGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <FlightCardSkeleton key={i} />
      ))}
    </div>
  )
}