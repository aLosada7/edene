import { Meta, Story } from '@storybook/react';

import { List } from './List';
import { ListItem } from './ListItem';
import { ListProps } from './types';

const meta: Meta = {
    title: 'Components/List',
    component: List,
};
export default meta;

const Template: Story<ListProps> = (args) => (
    <List {...args}>
        <ListItem>Item A</ListItem>
        <ListItem>Item B</ListItem>
        <ListItem>Item C</ListItem>
    </List>
);

export const Playground = Template.bind({});
Playground.storyName = '🧶 Playground';

export const Default = Template.bind({});

export const WithSepation = Template.bind({});
WithSepation.args = {
    withSeparation: true,
};
