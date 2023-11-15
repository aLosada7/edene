import { DayFormat } from '../../CalendarDay/types';

export type WeekDayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface CalendarWeekHeaderProps {
    weekStartsOn: WeekDayNumber;
    dayFormat: DayFormat;
}
