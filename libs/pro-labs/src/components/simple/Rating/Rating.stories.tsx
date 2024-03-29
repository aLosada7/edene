import { Meta,Story } from '@storybook/react';

import { Rating as RatingComponent, RatingProps } from './Rating';

export default {
    component: RatingComponent,
    title: 'Components',
} as Meta;

const Template: Story<RatingProps> = (args: RatingProps) => (
    <RatingComponent {...args} />
);

export const Rating = Template.bind({});
Rating.args = {
    stars: 3,
};
