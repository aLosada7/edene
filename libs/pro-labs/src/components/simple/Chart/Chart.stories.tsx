import { Meta,Story } from '@storybook/react';

import ChartComponent from './Chart';

export default {
    title: 'Components',
    component: ChartComponent,
} as Meta;

const Template: Story = () => <ChartComponent />;

export const Chart = Template.bind({});
