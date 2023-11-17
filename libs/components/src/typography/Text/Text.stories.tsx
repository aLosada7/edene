import { defaultTheme } from '@edene/foundations';
import { Story } from '@storybook/react';

import { Text, TextProps } from './index';
import { Row } from '../../layout/Grid';

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
    <Row direction="column" gap={4}>
        <Text>Size regular</Text>
        <Text size="small">Size small</Text>
        <Text size="xsmall">Size xsmall</Text>
        <Text size="xxsmall">Size xxsmall</Text>
    </Row>
);

export const Weights = () => (
    <Row direction="column" gap={4}>
        <Text weight="bold">Light bold</Text>
        <Text>Light regular</Text>
    </Row>
);
