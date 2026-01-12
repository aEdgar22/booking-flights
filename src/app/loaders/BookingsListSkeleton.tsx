import { BookingCardSkeleton } from "./BookingCardSkeleton";

export function BookingsListSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <BookingCardSkeleton />
      <BookingCardSkeleton />
      <BookingCardSkeleton />
    </div>
  );
}