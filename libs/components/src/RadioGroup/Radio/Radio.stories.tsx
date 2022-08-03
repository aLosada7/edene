import { Radio } from './Radio';
import { asChromaticStory } from '../../lib/story-intents';
import type { Story } from '../../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Radio',
    component: Radio,
};

const Template: Story = () => <Radio>First</Radio>;

export const Default = Template.bind({});
asChromaticStory(Default);
