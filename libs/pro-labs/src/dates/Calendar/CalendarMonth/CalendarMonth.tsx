import { FC } from 'react';
import { CalendarMonthProps } from './types';
import CalendarWeekHeader from '../CalendarWeek/CalendarWeekHeader';
import CalendarMonthTitle from './CalendarMonthTitle';

const CalendarMonth: FC<CalendarMonthProps> = ({
    title,
    weekStartsOn,
    dayFormat,
    children,
}) => (
    <>
        <CalendarMonthTitle title={title} />
        <CalendarWeekHeader weekStartsOn={weekStartsOn} dayFormat={dayFormat} />
        {children}
    </>
);

export default CalendarMonth;
