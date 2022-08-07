import { Divider, DividerProps } from './Divider';
import { asPlayground, asChromaticStory } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';

export default {
    title: 'Components/Divider',
    component: Divider,
};

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default = () => <Divider />;
asChromaticStory(Default);
