import React from 'react';
import { default as formatFn } from 'date-fns/format';
import { date } from './constants';
import { Story } from '@storybook/react';

export default {
    title: 'Dates',
};

const DateComponent = ({ date }) => (
    <>
        <p>short:{formatFn(date, 'P')}</p>
        <p>medium:{formatFn(date, 'PP')}</p>
        <p>long:{formatFn(date, 'PPP')}</p>
    </>
);
export const Date: Story<typeof DateComponent> = DateComponent.bind({});
Date.args = {
    date,
};

const HourComponent = ({ date }) => (
    <>
        <p>minutes: {formatFn(date, 'p')}</p>
        <p>seconds: {formatFn(date, 'pp')}</p>
    </>
);
export const Hour = HourComponent.bind({});
Hour.args = {
    date,
};

const FormatComponent = ({ date, format }) => <>{formatFn(date, format)}</>;
export const Format = FormatComponent.bind({});
Format.args = {
    date,
    format: 'yyyy-MM-dd HH:mm',
};
