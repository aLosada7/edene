import { Textarea } from '.';
import { asChromaticStory, asPlayground } from '../../lib/story-intents';
import type { Story } from '../../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Forms/Textarea',
    component: Textarea,
};

const Template: Story = () => <Textarea label="Select"></Textarea>;

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);
