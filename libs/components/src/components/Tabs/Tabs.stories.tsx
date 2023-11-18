import { useState } from 'react';
import { Story } from '@storybook/react';

import { Text } from '../../typography/Text';
import { Tabs, Tab, TabsProps } from './index';

export default {
    title: 'Components/Tabs',
    component: Tabs,
};

export const Playground: Story<
    Omit<TabsProps, 'active' | 'onTabChange'> & { tab1: any; tab2: any }
> = ({ tab1, tab2, ...args }) => {
    const [selected, setSelected] = useState('1');

    return (
        <Tabs
            active={selected}
            onTabChange={(key) => setSelected(key)}
            {...args}
        >
            <Tab tabKey={tab1.tabKey} label={tab1.label}>
                {tab1.content}
            </Tab>
            <Tab tabKey={tab2.tabKey} label={tab2.label}>
                {tab2.content}
            </Tab>
        </Tabs>
    );
};
Playground.storyName = '🧶 Playground';
Playground.args = {
    tab1: {
        tabKey: '1',
        label: 'Tab 1',
        content: <Text type="regular">Content for first tab goes here.</Text>,
    },
    tab2: {
        tabKey: '2',
        label: 'Tab 2',
        content: <Text type="regular">Content for second tab goes here.</Text>,
    },
};

export const Default: Story<TabsProps> = (
    args: Omit<TabsProps, 'active' | 'onTabChange'>
) => {
    const [selected, setSelected] = useState('1');

    return (
        <Tabs
            active={selected}
            onTabChange={(key) => setSelected(key)}
            {...args}
        >
            <Tab tabKey="1" label="Tab 1">
                <Text type="regular">Content for first tab goes here.</Text>
            </Tab>
            <Tab tabKey="2" label="Tab 2">
                <Text type="regular">Content for second tab goes here.</Text>
            </Tab>
        </Tabs>
    );
};

export const WithOrientationVertical = Default.bind({});
WithOrientationVertical.args = {
    orientation: 'vertical',
};

export const WithTabDisabled: Story = () => {
    const [selected, setSelected] = useState('2');

    return (
        <Tabs active={selected} onTabChange={(key) => setSelected(key)}>
            <Tab tabKey="1" label="Disabled tab" disabled>
                <Text type="regular">Content for first tab goes here.</Text>
            </Tab>
            <Tab tabKey="2" label="Tab 2">
                <Text type="regular">Content for second tab goes here.</Text>
            </Tab>
        </Tabs>
    );
};

export const WithTabHidden: Story = () => {
    const [selected, setSelected] = useState('2');

    return (
        <Tabs active={selected} onTabChange={(key) => setSelected(key)}>
            <Tab tabKey="1" label="Hidden tab" hidden>
                <Text type="regular">Content for first tab goes here.</Text>
            </Tab>
            <Tab tabKey="2" label="Tab 2">
                <Text type="regular">Content for second tab goes here.</Text>
            </Tab>
        </Tabs>
    );
};
