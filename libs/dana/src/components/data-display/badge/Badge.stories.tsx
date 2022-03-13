import React from 'react';

import { Badge, BadgeProps } from './Badge';
import { asPlayground, asChromaticStory } from '../../../lib/story-intents';
import type { Story } from '../../../lib/storybook-emotion-10-fixes';
import { Container, Row } from '../..';
import { StoryHStack } from '../../../lib/general-story-components';

export default {
    title: 'Components/Data Display/Badge',
    component: Badge,
    args: {
        text: 'SUCCESS',
    },
};

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Playground = Template.bind({});
asPlayground(Playground);

export const solid = () => (
    <Container mt={8}>
        <StoryHStack>
            <Badge color="gray" text="GRAY" />
            <Badge color="teal" text="TEAL" />
            <Badge color="pink" text="PINK" />
        </StoryHStack>
    </Container>
);
asChromaticStory(solid);
