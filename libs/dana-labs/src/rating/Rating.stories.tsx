import { Story, Meta } from '@storybook/react';
import { Rating, RatingProps } from './Rating';

export default {
    component: Rating,
    title: 'DanaLabs/Rating',
} as Meta;

const Template: Story<RatingProps> = (args: RatingProps) => (
    <Rating {...args} />
);

export const Default = Template.bind({});
Default.args = {
    stars: 3,
};
