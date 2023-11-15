import { Meta, Story } from '@storybook/react';

import CalendarMonthTitle from './CalendarMonthTitle';
import { CalendarMonthTitleProps } from './types';

const meta: Meta<CalendarMonthTitleProps> = {
    title: 'Dates/Calendar/Month/Title',
    component: CalendarMonthTitle,
};
export default meta;

export const Playground: Story<CalendarMonthTitleProps> = (args) => (
    <CalendarMonthTitle {...args} />
);
Playground.storyName = '🧶 Playground';
Playground.args = {
    title: 'Fake June 2020',
};
