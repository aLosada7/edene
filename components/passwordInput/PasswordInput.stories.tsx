import { PasswordInput, PasswordInputProps } from './PasswordInput';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';
import type { Story } from '../../../lib/storybook-emotion-10-fixes';

export default {
  title: 'Dana/Forms/PasswordInput',
  component: PasswordInput,
  args: {
    label: 'Password',
  },
};

const Template: Story<PasswordInputProps> = (args: PasswordInputProps) => (
  <PasswordInput {...args} />
);

// *****************************************************************************

export const Playground = Template.bind({});
Playground.args = {
  supporting: 'Leave blank if you are not within the US',
};
asPlayground(Playground);

// *****************************************************************************

export const DefaultPasswordInput = Template.bind({});
asChromaticStory(DefaultPasswordInput);
