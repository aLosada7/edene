import { Story, Meta } from '@storybook/react';

import N26MobileNavbar from './N26MobileNavbar';

export default {
    component: N26MobileNavbar,
    title: 'Lab/N26MobileNavbar',
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;

const Template: Story = () => <N26MobileNavbar />;

export const Default = Template.bind({});
