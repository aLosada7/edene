import { Story } from '@storybook/react';

import CalendarWeekHeader from './CalendarWeekHeader';
import { CalendarWeekHeaderProps } from './types';

export default {
    title: 'Calendar/Week Header',
    component: CalendarWeekHeader,
};

export const Playground: Story<CalendarWeekHeaderProps> = (args) => (
    <CalendarWeekHeader {...args} />
);
Playground.storyName = '🧶 Playground';
Playground.args = {
    weekStartsOn: 0,
    weekDaysFormat: 'iii',
};
