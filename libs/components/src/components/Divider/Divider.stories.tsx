import { Story } from '@storybook/react';

import { Divider, DividerProps } from './index';

export default {
    title: 'Components/Divider',
    component: Divider,
};

export const Playground: Story<DividerProps> = (args) => <Divider {...args} />;
Playground.storyName = '🧶 Playground';
Playground.args = {
    width: '100px',
};

export const Default = () => <Divider width="300px" />;
