import useHover from '../../hooks/useHover';
import { Button, Container, Text } from '..';
import { asChromaticStory } from '../../lib/story-intents';
import type { Story } from '../../lib/storybook-emotion-10-fixes';
import { useRef } from 'react';
import { Tabs, Tab } from '../Tabs';

export default {
    title: 'Components/Overlay/Tooltip',
    component: Tabs,
};

const Template: Story = () => {
    return (
        <Container mt={8}>
            <Tabs>
                <Tab id="tab-1" label="Tab label 1">
                    <Text>Content for first tab goes here.</Text>
                </Tab>
                <Tab id="tab-2" label="Tab label 2">
                    <Text>Content for second tab goes here.</Text>
                    <Button>With a button</Button>
                </Tab>
            </Tabs>
        </Container>
    );
};

export const Default = Template.bind({});
asChromaticStory(Default);
