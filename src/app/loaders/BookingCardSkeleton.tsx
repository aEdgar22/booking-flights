import { Card, CardContent } from "@/app/components/ui/card"
import { Skeleton } from "@/app/components/ui/skeleton"

export function BookingCardSkeleton() {
  return (
    <Card className="w-full">
      <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex-1 w-full md:w-auto">
          <div className="flex items-center gap-2 mb-2">
            <Skeleton className="h-5 w-16 rounded-full" /> 
            <Skeleton className="h-4 w-32" /> 
          </div>

          <div className="flex items-center gap-4">
            <Skeleton className="h-8 w-16" /> 
            <Skeleton className="h-6 w-6 rounded-full" /> 
            <Skeleton className="h-8 w-16" /> 
          </div>
        </div>

        <div className="w-full md:w-auto flex flex-col gap-2 md:border-l md:pl-6 md:border-slate-100">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded-full" /> 
            <Skeleton className="h-4 w-32" /> 
          </div>
          <div className="flex items-center gap-2">
             <Skeleton className="h-4 w-4 rounded-full" /> 
             <Skeleton className="h-4 w-24" /> 
          </div>
        </div>

        <div className="w-full md:w-auto flex flex-col md:items-end mt-2 md:mt-0">
            <Skeleton className="h-3 w-20 mb-1" /> 
            <Skeleton className="h-7 w-28" /> 
        </div>

      </CardContent>
    </Card>
  )
}