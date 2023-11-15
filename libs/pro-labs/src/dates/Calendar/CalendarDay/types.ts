export type DayFormat = 'S' | 'Su' | 'Sun' | 'Sunday';

export interface CalendarDayProps {
    dayNumber: number;
    isWeekend: boolean;
}
