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
    size: 'h1',
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
        <Heading>Size h1</Heading>
        <Heading size="h2">Size h2</Heading>
        <Heading size="h3">Size h3</Heading>
        <Heading size="h4">Size h4</Heading>
        <Heading size="h5">Size h5</Heading>
        <Heading size="h6">Size h6</Heading>
    </>
);

export const Weights = () => (
    <>
        <Heading weight="bold">Light bold</Heading>
        <Heading>Light regular</Heading>
    </>
);
