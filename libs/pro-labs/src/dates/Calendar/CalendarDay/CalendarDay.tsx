import { FC } from 'react';
import { CalendarDayProps } from './types';
import { Text } from '@edene/components';

const CalendarWeekHeader: FC<CalendarDayProps> = ({ dayNumber, isWeekend }) => {
    return <Text weight={isWeekend ? 'bold' : 'regular'}>{dayNumber}</Text>;
};

export default CalendarWeekHeader;
