import { defaultTheme } from '@edene/foundations';
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
    ...defaultTheme.text,
    text: 'Hello World',
};

export const Default = () => <Text>Hello World</Text>;

export const Sizes = () => (
    <Stack>
        <Text>Size regular</Text>
        <Text size="small">Size small</Text>
        <Text size="xsmall">Size xsmall</Text>
        <Text size="xxsmall">Size xxsmall</Text>
    </Stack>
);

export const Weights = () => (
    <Stack>
        <Text weight="bold">Light bold</Text>
        <Text>Light regular</Text>
    </Stack>
);
