import { action } from '@storybook/addon-actions';

import { Icon } from '../../icons';
import { ActionButton } from './ActionButton';

export default {
    title: 'Laboratory/ActionButton',
    component: ActionButton,
};

export const Default = () => (
    <ActionButton style={{ margin: '2rem' }} onClick={action('onClick')}>
        <Icon>close</Icon>
    </ActionButton>
);
