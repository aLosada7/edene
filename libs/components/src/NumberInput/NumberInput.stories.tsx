import { useState } from 'react';
import { Story } from '@storybook/react';

import { NumberInput, NumberInputProps } from './index';

export default {
    title: 'Forms/NumberInput',
    component: NumberInput,
    args: {
        labelText: 'Quantity',
        step: 10,
    },
};

export const Playground: Story<NumberInputProps> = (args: NumberInputProps) => (
    <NumberInput {...args} />
);
Playground.storyName = '🧶 Playground';

export const Default: Story<NumberInputProps> = (args: NumberInputProps) => (
    <NumberInput {...args} />
);

export const Controlled: Story<NumberInputProps> = (args: NumberInputProps) => {
    const [value, setValue] = useState(5);

    return (
        <NumberInput
            value={value}
            {...args}
            onChange={(value) => setValue(value)}
        />
    );
};

export const WithMinAndMax = Controlled.bind({});
WithMinAndMax.args = {
    min: 50,
    max: 100,
};
