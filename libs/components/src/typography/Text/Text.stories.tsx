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
    type: 'regular',
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
        <Text type="regular">Size regular</Text>
        <Text type="small">Size small</Text>
        <Text type="xsmall">Size xsmall</Text>
        <Text type="xxsmall">Size xxsmall</Text>
    </>
);

export const Weights = () => (
    <>
        <Text type="regular" weight="bold">
            Light bold
        </Text>
        <Text type="regular">Light regular</Text>
    </>
);
