import { Story } from '@storybook/react';

import { Stack } from './index';
import { Box } from '../Box';
import { layoutElement } from '@utils/storybook';

export default {
    title: 'Layout/Stack',
    component: Stack,
};

export const Playground: Story<{
    item1: string;
    item2: string;
    item3: string;
    item4: string;
}> = ({ item1, item2, item3, item4 }) => (
    <Stack>
        <Box css={layoutElement}>{item1}</Box>
        <Box css={layoutElement}>{item2}</Box>
        <Box css={layoutElement}>{item3}</Box>
        <Box css={layoutElement}>{item4}</Box>
    </Stack>
);
Playground.storyName = '🧶 Playground';
Playground.args = {
    item1: 'Item 1',
    item2: 'Item 2',
    item3: 'Item 3',
    item4: 'Item 4',
};

export const Default: Story = () => (
    <Stack>
        <Box css={layoutElement}>Item 1</Box>
        <Box css={layoutElement}>Item 2</Box>
        <Box css={layoutElement}>Item 3</Box>
    </Stack>
);
