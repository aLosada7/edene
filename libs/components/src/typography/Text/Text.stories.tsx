import { Story } from '@storybook/react';

import { Stack } from '../../layout/Stack';
import { Text, TextProps } from './index';

export default {
    title: 'Typography/Text',
    component: Text,
};

export const Playground: Story<TextProps & { text: string }> = ({
    text,
    ...args
}) => <Text {...args}>{text}</Text>;
Playground.storyName = '🧶 Playground';
Playground.args = {
    text: 'Hello World',
};

export const Default = () => <Text>Hello World</Text>;

export const Sizes = () => (
    <Stack>
        <Text>Size regular</Text>
        <Text size="xsm">Size xsm</Text>
        <Text size="sm">Size sm</Text>
        <Text size="xxsm">Size xxsm</Text>
    </Stack>
);

export const Weights = () => (
    <Stack>
        <Text weight="bold">Light bold</Text>
        <Text>Light regular</Text>
    </Stack>
);
