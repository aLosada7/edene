import { Story } from '@storybook/react';
import { layoutElement } from '@utils/storybook';

import { Box, BoxProps } from './index';

export default {
    title: 'Layout/Box',
    component: Box,
};

export const Playground: Story<BoxProps> = (args: BoxProps) => {
    return (
        <Box css={layoutElement} {...args}>
            Element 1
        </Box>
    );
};
Playground.storyName = '🧶 Playground';
