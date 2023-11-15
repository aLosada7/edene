import { DayFormat } from './CalendarDay/types';
import { WeekDayNumber } from './CalendarWeek/CalendarWeekHeader/types';

export interface CalendarProps {
    weekStartsOn?: WeekDayNumber;
    dayFormat?: DayFormat;
}
