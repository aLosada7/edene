import { Badge, BadgeProps } from './Badge';
import { asPlayground, asChromaticStory } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';
import { StoryHStack } from '../lib/general-story-components';

export default {
    title: 'Components/Badge',
    component: Badge,
    args: {
        text: 'Success',
    },
};

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Playground = Template.bind({});
asPlayground(Playground);

export const Default = () => (
    <StoryHStack>
        <Badge color="gray" text="Gray" />
        <Badge color="teal" text="Teal" />
        <Badge color="pink" text="Pink" />
    </StoryHStack>
);
asChromaticStory(Default);
