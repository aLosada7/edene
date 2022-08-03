import { Story, Meta } from '@storybook/react';
import { CountrySelector } from './CountrySelector';

export default {
    component: CountrySelector,
    title: 'DanaLabs/Selector',
} as Meta;

const Template: Story = () => <CountrySelector />;

export const Country = Template.bind({});
Country.args = {};
