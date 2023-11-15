import { default as formatFn } from 'date-fns/format';
import { date } from '../constants';
import useCalendar from './useCalendar';
import CalendarMonth from './CalendarMonth';
import { FC } from 'react';
import { CalendarProps } from './types';
import CalendarDay from './CalendarDay';

const Calendar: FC<CalendarProps> = ({ weekStartsOn = 0, dayFormat = 'S' }) => {
    const { months } = useCalendar({ weekStartsOn });

    console.log(months);

    return (
        <>
            <input value={formatFn(date, 'PPP')} />

            {months.map(({ days }, index) => (
                <CalendarMonth
                    key={index}
                    title="Still Fake month"
                    weekStartsOn={weekStartsOn}
                    dayFormat={dayFormat}
                >
                    {days.map(({ number }) => (
                        <CalendarDay dayNumber={number} isWeekend={false} />
                    ))}
                </CalendarMonth>
            ))}
        </>
    );
};

export default Calendar;
