export interface IFlight {
    id: string;
    code: string;
    origin: string;
    destination: string;
    price: number;
    departure: Date;
    seats: number;
}