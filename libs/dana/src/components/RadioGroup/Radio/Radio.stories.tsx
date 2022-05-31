import { Radio, RadioProps } from './Radio';
import { asChromaticStory } from '../../../lib/story-intents';
import type { Story } from '../../../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Forms/Radio',
    component: Radio,
};

const Template: Story<RadioProps> = (args: RadioProps) => <Radio>First</Radio>;

export const Basic = Template.bind({});
asChromaticStory(Basic);
