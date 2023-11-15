import { startOfMonth, startOfWeek, getDaysInMonth, addDays } from 'date-fns';
import { WeekDayNumber } from '../CalendarWeek/CalendarWeekHeader/types';

const createMonth = ({ weekStartsOn }: { weekStartsOn: WeekDayNumber }) => {
    const date = new Date();
    const firstDay = startOfMonth(date);
    const weekStart = startOfWeek(firstDay, { weekStartsOn });
    const totalDays = getDaysInMonth(date);

    const days = Array.from({ length: totalDays }).map((_, day: number) => {
        return { number: day + 1, date: addDays(firstDay, day) };
    });

    return {
        days,
        monthProps: { weekStart },
    };
};

export default createMonth;
