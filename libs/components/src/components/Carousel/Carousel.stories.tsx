import { Meta, Story } from '@storybook/react';

import { Carousel, CarouselProps } from './index';

export default {
    component: Carousel,
    title: 'Components/Carousel',
} as Meta;

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
    src: [
        {
            src: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800',
            alt: 'Lounge',
        },
        {
            src: 'https://images.pexels.com/photos/342800/pexels-photo-342800.jpeg?auto=compress&cs=tinysrgb&w=800',
            alt: 'Bathroom',
        },
    ],
};
