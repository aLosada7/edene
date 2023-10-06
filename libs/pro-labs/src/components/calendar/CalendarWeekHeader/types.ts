type WeekDayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;
type DayFormat = 'S' | 'Su' | 'Sun' | 'Sunday';

export interface CalendarWeekHeaderProps {
    weekStartsOn: WeekDayNumber;
    dayFormat: DayFormat;
}
