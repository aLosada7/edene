import { Story, Meta } from '@storybook/react';

import N26Navbar from './N26Navbar';

export default {
    component: N26Navbar,
    title: 'Lab/N26Navbar',
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;

const Template: Story = () => <N26Navbar />;

export const Default = Template.bind({});
