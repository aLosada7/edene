import { useState } from 'react';

import { Container, Text } from '@edene/components';

import { asPlayground, asChromaticStory } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';
import { Tabs, Tab, TabsProps } from '../Tabs';

export default {
    title: 'Components/Tabs',
    component: Tabs,
};

const Tab1 = <Text>Content for first tab goes here.</Text>;
const Tab2 = <Text>Content for second tab goes here.</Text>;

const Template: Story<TabsProps> = (
    args: Omit<TabsProps, 'active' | 'onTabChange'>
) => {
    const [selected, setSelected] = useState('1');

    return (
        <Container mt={8}>
            <Tabs
                active={selected}
                onTabChange={(tabKey) => setSelected(tabKey)}
                {...args}
            >
                <Tab tabKey="1" label="Tab 1">
                    {Tab1}
                </Tab>
                <Tab tabKey="2" label="Tab 2">
                    {Tab2}
                </Tab>
            </Tabs>
        </Container>
    );
};

// *****************************************************************************

export const Playground = Template.bind({});
asPlayground(Playground);

// *****************************************************************************

export const Default = Template.bind({});
asChromaticStory(Default);

export const Vertical = Template.bind({});
Vertical.args = {
    orientation: 'vertical',
};
asChromaticStory(Default);

export const WithTabDisabled: Story = () => {
    const [selected, setSelected] = useState('2');

    return (
        <Container mt={8}>
            <Tabs
                active={selected}
                onTabChange={(tabKey) => setSelected(tabKey)}
            >
                <Tab tabKey="1" label="Tab 1" disabled>
                    {Tab1}
                </Tab>
                <Tab tabKey="2" label="Tab 2">
                    {Tab2}
                </Tab>
            </Tabs>
        </Container>
    );
};

export const WithTabHidden: Story = () => {
    const [selected, setSelected] = useState('2');

    return (
        <Container mt={8}>
            <Tabs
                active={selected}
                onTabChange={(tabKey) => setSelected(tabKey)}
            >
                <Tab tabKey="1" label="Tab 1" hidden>
                    {Tab1}
                </Tab>
                <Tab tabKey="2" label="Tab 2">
                    {Tab2}
                </Tab>
            </Tabs>
        </Container>
    );
};
