import { action } from '@storybook/addon-actions';

import { asChromaticStory } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';

import { MenuButton, MenuButtonProps } from './MenuButton';

export default {
    title: 'Components/Navigation/MenuButton',
    component: MenuButton,
};

const Template: Story<MenuButtonProps> = () => (
    <div style={{ margin: '2rem' }}>
        <MenuButton onClick={action('onClick')} />
    </div>
);

export const Default = Template.bind({});
asChromaticStory(Default);
