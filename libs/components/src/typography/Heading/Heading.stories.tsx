import { Story } from '@storybook/react';

import { Heading, HeadingProps } from './index';

export default {
    title: 'Typography/Heading',
    component: Heading,
};

const Template: Story<HeadingProps & { title: string }> = ({
    title,
    ...args
}) => <Heading {...args}>{title}</Heading>;

export const Playground = Template.bind({});
Playground.storyName = '🧶 Playground';
Playground.args = {
    title: 'Hello World',
    type: 'h1',
    weight: 'regular',
    textAlign: 'inherit',
    color: 'primary',
};

export const Default = Template.bind({});
Default.args = {
    title: 'Hello World',
};

export const Sizes = () => (
    <>
        <Heading type="h1">Size h1</Heading>
        <Heading type="h2">Size h2</Heading>
        <Heading type="h3">Size h3</Heading>
        <Heading type="h4">Size h4</Heading>
        <Heading type="h5">Size h5</Heading>
        <Heading type="h6">Size h6</Heading>
    </>
);

export const Weights = () => (
    <>
        <Heading type="h1" weight="bold">
            Light bold
        </Heading>
        <Heading type="h1">Light regular</Heading>
    </>
);
