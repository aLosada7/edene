import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import { MenuButton, MenuButtonProps } from './index';

export default {
    title: 'Components/MenuButton',
    component: MenuButton,
};

const Template: Story<MenuButtonProps> = () => (
    <div style={{ margin: '2rem' }}>
        <MenuButton onClick={action('onClick')} />
    </div>
);

export const Default = Template.bind({});
