import { TextInput, TextInputProps } from './TextInput';
import { asPlayground, asChromaticStory } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';
import { useState } from 'react';

export default {
    title: 'Components/TextInput',
    component: TextInput,
    args: {
        label: 'Your email',
        placeholder: 'Your email',
        optional: false,
        error: undefined,
        success: undefined,
    },
};

const Template: Story<TextInputProps> = (args: TextInputProps) => {
    return <TextInput {...args} />;
};

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);

// *****************************************************************************

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

// *****************************************************************************

export const OptionalTextInput = ControlledTemplate.bind({});
OptionalTextInput.args = {
    optional: true,
};
asChromaticStory(OptionalTextInput);

// *****************************************************************************

export const ErrorTextInput = ControlledTemplate.bind({});
ErrorTextInput.args = {
    error: 'Invalid email',
};
asChromaticStory(ErrorTextInput);

// *****************************************************************************

export const SuccessTextInput = ControlledTemplate.bind({});
SuccessTextInput.args = {
    success: 'Success email',
};
asChromaticStory(SuccessTextInput);

// *****************************************************************************

export const Controlled = ControlledTemplate.bind({});
asChromaticStory(Controlled);

// *****************************************************************************

export const WithLeftIcon = ControlledTemplate.bind({});
WithLeftIcon.args = {
    iconLeft: 'alternate_email',
};
asChromaticStory(WithLeftIcon);

// *****************************************************************************

export const Width30TextInput = ControlledTemplate.bind({});
Width30TextInput.args = {
    width: 30,
};
asChromaticStory(Width30TextInput);

// *****************************************************************************

export const Width10TextInput = ControlledTemplate.bind({});
Width10TextInput.args = {
    width: 10,
    label: 'Name',
};
asChromaticStory(Width10TextInput);

// *****************************************************************************

export const Width4TextInput = ControlledTemplate.bind({});
Width4TextInput.args = {
    width: 4,
    label: 'Year of birth',
};
asChromaticStory(Width4TextInput);
