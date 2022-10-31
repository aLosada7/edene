import { Story, Meta } from '@storybook/react';

import { Pagination } from './Pagination';

export default {
    component: Pagination,
    title: 'Lab/Pagination',
} as Meta;

const Template: Story = () => <Pagination />;

export const Default = Template.bind({});
