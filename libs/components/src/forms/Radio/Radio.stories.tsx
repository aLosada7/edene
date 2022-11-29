import React from 'react';
import { Story } from '@storybook/react';

import { RadioGroup, RadioGroupProps, Radio } from './index';

export default {
    title: 'Forms/RadioGroup',
    component: RadioGroup,
    subcomponents: [Radio],
};

export const Playground: Story<
    RadioGroupProps & { value1: string; value2: string; value3: string }
> = ({ value1, value2, value3, ...args }) => {
    return (
        <RadioGroup {...args}>
            <Radio value={value1}>{value1}</Radio>
            <Radio value={value2}>{value2}</Radio>
            <Radio value={value3}>{value3}</Radio>
        </RadioGroup>
    );
};
Playground.storyName = '🧶 Playground';
Playground.args = {
    value1: 'React',
    value2: 'Angular',
    value3: 'Vue',
};

export const Default = () => (
    <RadioGroup>
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
    </RadioGroup>
);

export const WithDefaultValue = () => (
    <RadioGroup defaultValue="3">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
    </RadioGroup>
);

export const WithInline = () => (
    <RadioGroup inline>
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
    </RadioGroup>
);

export const Controlled: Story<RadioGroupProps> = (args: RadioGroupProps) => {
    const [value, setValue] = React.useState('1');
    return (
        <RadioGroup onChange={setValue} value={value} {...args}>
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
        </RadioGroup>
    );
};
