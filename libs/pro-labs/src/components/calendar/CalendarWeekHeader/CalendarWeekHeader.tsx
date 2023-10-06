import { FC } from 'react';
import { CalendarWeekHeaderProps } from './types';
import { Group, Text } from '@edene/components';
import { startOfWeek, format as formatFn, addDays } from 'date-fns';

const WEEK_DAYS = 7;
export const DAY_FORMAT = {
    S: 'iiiii',
    Su: 'iiiiii',
    Sun: 'iii',
    Sunday: 'iiii',
};

const CalendarWeekHeader: FC<CalendarWeekHeaderProps> = ({
    weekStartsOn,
    dayFormat,
}) => {
    const firstDOW = startOfWeek(new Date(), { weekStartsOn });
    const weekDays = Array.from({ length: WEEK_DAYS }).map((_, i) =>
        formatFn(addDays(firstDOW, i), DAY_FORMAT[dayFormat])
    );

    const days = Array.from({ length: WEEK_DAYS }).map((_, i) => {
        const weekDay = i % WEEK_DAYS;
        const weekDayWeekend = (weekDay + weekStartsOn) % WEEK_DAYS;
        const isWeekend = weekDayWeekend === 0 || weekDayWeekend === 6;

        return (
            <Text key={i} weight={isWeekend ? 'bold' : 'regular'}>
                {weekDays[weekDay]}
            </Text>
        );
    });

    return <Group>{days}</Group>;
};

export default CalendarWeekHeader;
