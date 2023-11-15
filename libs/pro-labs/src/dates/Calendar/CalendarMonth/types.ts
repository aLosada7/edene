import { CalendarMonthTitleProps } from './CalendarMonthTitle/types';
import { CalendarWeekHeaderProps } from '../CalendarWeek/CalendarWeekHeader/types';
import { ReactNode } from 'react';

export interface CalendarMonthProps
    extends CalendarMonthTitleProps,
        CalendarWeekHeaderProps {
    children: ReactNode;
}
