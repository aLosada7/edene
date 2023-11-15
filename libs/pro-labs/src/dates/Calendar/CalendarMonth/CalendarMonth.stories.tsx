import { Meta, Story } from '@storybook/react';

import CalendarMonth from './CalendarMonth';
import { CalendarMonthProps } from './types';
import * as CalendarMonthTitle from './CalendarMonthTitle/CalendarMonthTitle.stories';
import * as CalendarWeekHeader from '../CalendarWeek/CalendarWeekHeader/CalendarWeekHeader.stories';

const meta: Meta<CalendarMonthProps> = {
    title: 'Dates/Calendar/Month',
    component: CalendarMonth,
};
export default meta;

export const Playground: Story<CalendarMonthProps> = (args) => (
    <CalendarMonth {...args} />
);
Playground.storyName = '🧶 Playground';
Playground.args = {
    ...CalendarMonthTitle.Playground.args,
    ...CalendarWeekHeader.Playground.args,
};
