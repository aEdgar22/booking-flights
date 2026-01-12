import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Skeleton } from "@/app/components/ui/skeleton"

export function FlightCardSkeleton() {
  return (
    <Card className="w-[400px] h-auto px-4 border-slate-200">
      <CardHeader className="p-0 pt-6">
        <div className="flex items-center gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-7 w-20" />
        </div>
      </CardHeader>

      <CardTitle className="flex items-center gap-2 py-4">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-5 w-5 rounded-full" />
        <Skeleton className="h-6 w-24" />
      </CardTitle>

      <CardContent className="flex items-center gap-2 p-0 mb-6">
        <Skeleton className="h-5 w-5 rounded-full" />
        <Skeleton className="h-4 w-48" />
      </CardContent>

      <CardFooter className="px-0 pb-6">
        <Skeleton className="h-10 w-full rounded-md" />
      </CardFooter>
    </Card>
  )
}

export function FlightGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <FlightCardSkeleton key={i} />
      ))}
    </div>
  )
}