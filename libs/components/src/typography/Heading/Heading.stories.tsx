import { defaultTheme } from '@edene/foundations';
import { Story } from '@storybook/react';

import { Stack } from '../../layout/Stack';
import { Heading, HeadingProps } from './index';

export default {
    title: 'Typography/Heading',
    component: Heading,
};

export const Playground: Story<HeadingProps & { title: string }> = ({
    title,
    ...args
}) => <Heading {...args}>{title}</Heading>;
Playground.storyName = '🧶 Playground';
Playground.args = {
    ...defaultTheme.heading,
    title: 'Hello World',
};

export const Default = () => <Heading>Hello World</Heading>;

export const Sizes = () => (
    <Stack>
        <Heading>Size h1</Heading>
        <Heading size="h2">Size h2</Heading>
        <Heading size="h3">Size h3</Heading>
        <Heading size="h4">Size h4</Heading>
        <Heading size="h5">Size h5</Heading>
        <Heading size="h6">Size h6</Heading>
    </Stack>
);

export const Weights = () => (
    <Stack>
        <Heading weight="bold">Light bold</Heading>
        <Heading>Light regular</Heading>
    </Stack>
);
