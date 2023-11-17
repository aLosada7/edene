import { Story } from '@storybook/react';

import { Text, TextProps } from './index';

export default {
    title: 'Typography/Text',
    component: Text,
};

const Template: Story<TextProps & { text: string }> = ({ text, ...args }) => (
    <Text {...args}>{text}</Text>
);

export const Playground = Template.bind({});
Playground.storyName = '🧶 Playground';
Playground.args = {
    text: 'Hello World',
    size: 'regular',
    weight: 'regular',
    textAlign: 'inherit',
    color: 'primary',
};

export const Default = Template.bind({});
Default.args = {
    text: 'Hello World',
};

export const Sizes = () => (
    <>
        <Text>Size regular</Text>
        <Text size="small">Size small</Text>
        <Text size="xsmall">Size xsmall</Text>
        <Text size="xxsmall">Size xxsmall</Text>
    </>
);

export const Weights = () => (
    <>
        <Text weight="bold">Light bold</Text>
        <Text>Light regular</Text>
    </>
);
