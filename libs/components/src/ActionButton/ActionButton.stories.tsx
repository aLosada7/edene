import { action } from '@storybook/addon-actions';

import { Icon } from '@edene/components';

import { asChromaticStory } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';

import { ActionButton, ActionButtonProps } from './ActionButton';

export default {
    title: 'Components/ActionButton',
    component: ActionButton,
};

const CloseButton: Story<ActionButtonProps> = () => (
    <ActionButton style={{ margin: '2rem' }} onClick={action('onClick')}>
        <Icon>close</Icon>
    </ActionButton>
);

export const Default = CloseButton.bind({});
asChromaticStory(Default);
