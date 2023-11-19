import { Meta,Story } from '@storybook/react';

import { Sidebar } from './Sidebar';

export default {
    component: Sidebar,
    title: 'Lab/Sidebar',
} as Meta;

const Template: Story = () => <Sidebar />;

export const Default = Template.bind({});
