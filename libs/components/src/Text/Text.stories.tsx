import { Story } from '@storybook/react';

import { Stack } from '../Stack';
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
        <Text size="xxsm">Size xxsm</Text>
        <Text size="xsm">Size xsm</Text>
        <Text size="sm">Size sm</Text>
        <Text>Size md</Text>
        <Text size="lg">Size lg</Text>
        <Text size="xlg">Size xlg</Text>
        <Text size="xxlg">Size xxlg</Text>
    </Stack>
);

export const Weights = () => (
    <Stack>
        <Text weight="light">Light weight</Text>
        <Text weight="regular">Light regular</Text>
        <Text>Light bold</Text>
        <Text weight="bolder">Light bolder</Text>
    </Stack>
);
