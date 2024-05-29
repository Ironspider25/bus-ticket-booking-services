export interface Seat {
    bookedBy?: string;
    busName?: string;
    fare?: number;
    isAvailable?: boolean;
    isBooked?: boolean;
    isNotAvailable?: boolean;
    isSelected?: boolean;
}
export interface SeatsApiResponse {
    results: Seat[]
}