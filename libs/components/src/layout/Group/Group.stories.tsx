import { Story } from '@storybook/react';
import { layoutElement } from '@utils/storybook';

import { Group } from './index';
import { Box } from '../Box';

export default {
    title: 'Layout/Group',
    component: Group,
};

export const Playground: Story<{
    item1: string;
    item2: string;
    item3: string;
    item4: string;
}> = ({ item1, item2, item3, item4 }) => (
    <Group>
        <Box css={layoutElement}>{item1}</Box>
        <Box css={layoutElement}>{item2}</Box>
        <Box css={layoutElement}>{item3}</Box>
        <Box css={layoutElement}>{item4}</Box>
    </Group>
);
Playground.storyName = '🧶 Playground';
Playground.args = {
    item1: 'Item 1',
    item2: 'Item 2',
    item3: 'Item 3',
    item4: 'Item 4',
};

export const Default: Story = () => (
    <Group>
        <Box css={layoutElement}>Item 1</Box>
        <Box css={layoutElement}>Item 2</Box>
        <Box css={layoutElement}>Item 3</Box>
    </Group>
);
