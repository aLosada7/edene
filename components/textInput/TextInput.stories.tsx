import { TextInput, TextInputProps } from './TextInput';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';
import type { Story } from '../../../lib/storybook-emotion-10-fixes';
import { useState } from 'react';

export default {
  title: 'Laboratory/Forms/TextInput',
  component: TextInput,
  args: {
    label: 'Email',
    optional: false,
    error: undefined,
    success: undefined,
  },
  argTypes: {
    error: {
      options: ['undefined', 'error'],
      mapping: {
        undefined: undefined,
        error: 'The email address entered is not valid',
      },
      control: { type: 'radio' },
    },
    success: {
      options: ['undefined', 'success'],
      mapping: {
        undefined: undefined,
        success: 'Your email address has been registered successfully',
      },
      control: { type: 'radio' },
    },
    id: { control: null },
  },
};

const Template: Story<TextInputProps> = (args: TextInputProps) => {
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

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const DefaultTextInput = Template.bind({});
asChromaticStory(DefaultTextInput);

// *****************************************************************************

export const OptionalTextInput = Template.bind({});
OptionalTextInput.args = {
  optional: true,
};
asChromaticStory(OptionalTextInput);

// *****************************************************************************

export const Width30TextInput = Template.bind({});
Width30TextInput.args = {
  width: 30,
};
asChromaticStory(Width30TextInput);

export const Width10TextInput = Template.bind({});
Width10TextInput.args = {
  width: 10,
  label: 'Name',
};
asChromaticStory(Width10TextInput);

// *****************************************************************************

export const Width4TextInput = Template.bind({});
Width4TextInput.args = {
  width: 4,
  label: 'Year of birth',
};
asChromaticStory(Width4TextInput);

// *****************************************************************************

export const ErrorTextInput = Template.bind({});
ErrorTextInput.args = {
  error: 'The email address entered is not valid',
};
asChromaticStory(ErrorTextInput);

// *****************************************************************************

export const SuccessTextInput = Template.bind({});
SuccessTextInput.args = {
  success: 'Your email address has been registered successfully',
};
asChromaticStory(SuccessTextInput);

// *****************************************************************************

export const Constraint = Template.bind({});
Constraint.args = {
  label: 'Phone number',
  pattern: '[0-9]{1,9}',
  title: '9 digit phone number',
  type: 'tel',
};
asChromaticStory(Constraint);

// *****************************************************************************
