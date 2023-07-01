import { Story, Meta } from '@storybook/react';
import { CountrySelector as CountrySelectorComponent } from './CountrySelector';

export default {
    component: CountrySelectorComponent,
    title: 'Components/Forms',
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;

const Template: Story = () => <CountrySelectorComponent />;

export const CountrySelector = Template.bind({});
CountrySelector.args = {};
