export type SelectedDate = {
    day: number;
    month: number;
    year: number;
} | null;

export type TimeSlot = {
    start: string; // ISO string
    end: string;
    day: number;
    month: number;
    year: number;
};

export type SelectedTime = TimeSlot | null;
