import { Meta, Story } from '@storybook/react';

import CalendarWeekHeader, { DAY_FORMAT } from './CalendarWeekHeader';
import { CalendarWeekHeaderProps } from './types';

const meta: Meta<CalendarWeekHeaderProps> = {
    title: 'Dates/Calendar/Week/Header',
    component: CalendarWeekHeader,
    argTypes: {
        weekStartsOn: {
            control: {
                type: 'range',
                min: 0,
                max: 6,
                step: 1,
            },
            defaultValue: 0,
        },
        dayFormat: {
            control: {
                type: 'radio',
                options: Object.keys(DAY_FORMAT),
            },
            defaultValue: Object.keys(DAY_FORMAT)[0],
        },
    },
};
export default meta;

export const Playground: Story<CalendarWeekHeaderProps> = (args) => (
    <CalendarWeekHeader {...args} />
);
Playground.storyName = '🧶 Playground';
Playground.args = {
    weekStartsOn: 0,
    dayFormat: 'S',
};
