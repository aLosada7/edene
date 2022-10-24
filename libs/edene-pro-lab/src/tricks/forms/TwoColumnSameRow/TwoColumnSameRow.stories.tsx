import { Story, Meta } from '@storybook/react';

import TwoColumnSameRowForm from './index';

export default {
    title: 'Tricks/Forms',
    component: TwoColumnSameRowForm,
} as Meta;

const Template: Story = () => <TwoColumnSameRowForm />;

export const TwoColumnSameRow = Template.bind({});
