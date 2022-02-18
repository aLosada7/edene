import { Input, InputProps } from './Input';
import type { Story } from '../../../lib/storybook-emotion-10-fixes';
import { asChromaticStory, asPlayground } from '../../../lib/story-intents';

export default {
    title: 'Components/Forms/Input',
    component: Input,
    args: {
        optional: false,
        error: undefined,
        success: undefined,
    },
};

const Template: Story<InputProps> = (args: InputProps) => {
    return <Input {...args} />;
};

export const Playground = Template.bind({});
asPlayground(Playground);

export const Basic = Template.bind({});
asChromaticStory(Basic);
