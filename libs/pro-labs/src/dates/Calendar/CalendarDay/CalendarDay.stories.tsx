import { Story } from '@storybook/react';

import CalendarDay from './CalendarDay';
import { CalendarDayProps } from './types';

export default {
    title: 'Dates/Calendar/Day',
    component: CalendarDay,
};

export const Playground: Story<CalendarDayProps> = (args) => (
    <CalendarDay {...args} />
);
Playground.storyName = '🧶 Playground';
Playground.args = {
    dayNumber: 30,
    isWeekend: false,
};
