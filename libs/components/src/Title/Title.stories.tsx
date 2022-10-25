import { Story } from '@storybook/react';

import { Stack } from '../Stack';
import { Title, TitleProps } from './index';

export default {
    title: 'Typography/Title',
    component: Title,
};

export const Playground: Story<TitleProps & { title: string }> = ({
    title,
    ...args
}) => <Title {...args}>{title}</Title>;
Playground.storyName = '🧶 Playground';
Playground.args = {
    title: 'Hello World',
};

export const Default = () => <Title>Hello World</Title>;

export const Sizes = () => (
    <Stack>
        <Title size="h3">Size h3</Title>
        <Title size="h4">Size h4</Title>
        <Title size="h5">Size h5</Title>
    </Stack>
);

export const Weights = () => (
    <Stack>
        <Title weight="light">Light weight</Title>
        <Title weight="regular">Light regular</Title>
        <Title>Light bold</Title>
        <Title weight="bolder">Light bolder</Title>
    </Stack>
);
