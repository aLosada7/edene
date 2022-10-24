import { Story, Meta } from '@storybook/react';
import TitleWithIconAndBadgeComponent from './index';

export default {
    title: 'Tricks/Components',
    component: TitleWithIconAndBadgeComponent,
} as Meta;

const Template: Story = () => <TitleWithIconAndBadgeComponent />;

export const TitleWithIconAndBadge = Template.bind({});
