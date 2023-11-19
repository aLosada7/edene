import { useState } from 'react';
import { Story } from '@storybook/react';

import { Option,Select, SelectProps } from './index';

export default {
    title: 'Forms/Select',
    component: Select,
    args: {
        label: 'Favorite framework',
    },
};

export const Playground: Story<
    SelectProps & { option1: string; option2: string }
> = ({ option1, option2, ...args }) => (
    <Select {...args}>
        <Option value={option1}>{option1}</Option>
        <Option value={option2}>{option2}</Option>
    </Select>
);
Playground.storyName = '🧶 Playground';
Playground.args = {
    option1: 'React',
    option2: 'Angular',
};

export const Default: Story<SelectProps> = (args: SelectProps) => {
    return (
        <Select {...args}>
            <Option value="React">React</Option>
            <Option value="Angular">Angular</Option>
            <Option value="Vue">Vue</Option>
        </Select>
    );
};

export const WithDefaultValue = Default.bind({});
WithDefaultValue.args = {
    defaultValue: 'Vue',
};

export const Controlled: Story<SelectProps> = (args: SelectProps) => {
    const [value, setValue] = useState('React');

    return (
        <Select value={value} {...args} onChange={(value) => setValue(value)}>
            <Option value="React">React</Option>
            <Option value="Angular">Angular</Option>
            <Option value="Vue">Vue</Option>
        </Select>
    );
};
