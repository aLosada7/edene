import { FC } from 'react';
import { CalendarWeekHeaderProps } from './types';
import { Group, Text } from '@edene/components';

const WEEK_DAYS = 7;
const DAYS: Record<number, string> = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat',
};

const CalendarWeekHeader: FC<CalendarWeekHeaderProps> = ({
    weekStartsOn,
}) => {

    const weekDays = Array.from({ length: WEEK_DAYS }).map((_, i) =>

    const days = Array.from({ length: WEEK_DAYS }).map((_, i) => {
        const weekDay = i % WEEK_DAYS;
        const weekDayWeekend = (weekDay + weekStartsOn) % WEEK_DAYS;
        const isWeekend = weekDayWeekend === 0 || weekDayWeekend === 6;

        return (
            <Text key={i} weight={isWeekend ? 'bold' : 'regular'}>
                {DAYS[weekDay]}
            </Text>
        );
    });

    return <Group>{days}</Group>;
};

export default CalendarWeekHeader;
