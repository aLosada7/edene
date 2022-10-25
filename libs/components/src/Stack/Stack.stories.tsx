import { Story } from '@storybook/react';

import { Stack } from './index';
import { Button } from '../Button';

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
        <span>{item1}</span>
        <span>{item2}</span>
        <span>{item3}</span>
        <span>{item4}</span>
    </Stack>
);
Playground.storyName = '🧶 Playground';
Playground.args = {
    item1: '1',
    item2: '2',
    item3: '3',
    item4: '4',
};

export const Default: Story = () => (
    <Stack>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
    </Stack>
);
