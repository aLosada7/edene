import { Story, Meta } from '@storybook/react';
import HeadingWithIconAndBadgeComponent from './TitleWithIconAndBadge';

export default {
    title: 'Tricks/Components',
    component: HeadingWithIconAndBadgeComponent,
} as Meta;

const Template: Story = () => <HeadingWithIconAndBadgeComponent />;

export const HeadingWithIconAndBadge = Template.bind({});
