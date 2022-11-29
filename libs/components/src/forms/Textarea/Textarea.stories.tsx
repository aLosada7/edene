import { useState } from 'react';
import { Story } from '@storybook/react';

import { Textarea, TextareaProps } from './index';

export default {
    title: 'Forms/Textarea',
    component: Textarea,
    args: {
        label: 'Talk us about you',
    },
};

export const Playground: Story<TextareaProps> = (args: TextareaProps) => (
    <Textarea {...args}></Textarea>
);
Playground.storyName = '🧶 Playground';

export const Default: Story = () => <Textarea />;

export const ControlledTemplate: Story<TextareaProps> = (
    args: TextareaProps
) => {
    const [state, setState] = useState('');
    return (
        <Textarea
            {...args}
            value={state}
            onChange={(event) => setState(event.target.value)}
        />
    );
};
