import { ThemeProvider } from '@edene/foundations';
import { Story, Meta } from '@storybook/react';
import ChartComponent from './Chart';

export default {
    title: 'Components',
    component: ChartComponent,
} as Meta;

const Template: Story = () => (
    <ThemeProvider>
        <ChartComponent />
    </ThemeProvider>
);

export const Chart = Template.bind({});
