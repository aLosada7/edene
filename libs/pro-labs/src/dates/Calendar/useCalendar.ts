import createMonth from './CalendarMonth/createMonth';
import { WeekDayNumber } from './CalendarWeek/CalendarWeekHeader/types';

const useCalendar = ({ weekStartsOn }: { weekStartsOn: WeekDayNumber }) => {
    const month = createMonth({ weekStartsOn });

    return {
        months: [month],
    };
};

export default useCalendar;
