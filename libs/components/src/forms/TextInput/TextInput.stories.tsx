import { useState } from 'react';
import { Story } from '@storybook/react';

import { TextInput, TextInputProps } from './TextInput';

export default {
    title: 'Forms/TextInput',
    component: TextInput,
    args: {
        label: 'Your email',
        placeholder: 'Write here your email',
    },
};

export const Playground: Story<TextInputProps> = (args: TextInputProps) => {
    return <TextInput {...args} />;
};
Playground.storyName = '🧶 Playground';

export const Default = (args: TextInputProps) => {
    return <TextInput {...args} />;
};

const ControlledTemplate: Story<TextInputProps> = (args: TextInputProps) => {
    const [state, setState] = useState('');
    return (
        <TextInput
            {...args}
            value={state}
            onChange={(event) => setState(event.target.value)}
        />
    );
};

export const ErrorTextInput = ControlledTemplate.bind({});
ErrorTextInput.args = {
    error: 'Invalid email',
};

export const SuccessTextInput = ControlledTemplate.bind({});
SuccessTextInput.args = {
    success: 'Success email',
};

export const Controlled = ControlledTemplate.bind({});

export const WithLeftIcon = ControlledTemplate.bind({});
WithLeftIcon.args = {
    iconLeft: 'alternate_email',
};
