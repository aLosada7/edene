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
        <Badge color="gray">Gray</Badge>
        <Badge color="teal">Teal</Badge>
        <Badge color="pink">Pink</Badge>
    </StoryHStack>
);
asChromaticStory(Default);
