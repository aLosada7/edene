import { FC } from 'react';
import { Text } from '@edene/components';
import { CalendarMonthTitleProps } from './types';

const CalendarMonthTitle: FC<CalendarMonthTitleProps> = ({ title }) => (
    <Text>{title}</Text>
);

export default CalendarMonthTitle;
