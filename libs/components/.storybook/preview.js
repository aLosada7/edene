import { addDecorator } from '@storybook/react';

import { viewport } from './preview/viewport';
import { backgrounds } from './preview/backgrounds';
import { ThemeDecorator } from '@edene/foundations';
import './preview/styles.scss';

export const parameters = {
    backgrounds,
    layout: 'centered',
    options: {
        storySort: {
            order: [
                'Getting Started',
                'Tokens',
                'Typography',
                'Layout',
                'Components',
                'Forms',
                'UI Shell',
                'Animations',
                'Hooks',
                'Laboratory',
            ],
        },
    },
    viewport,
};

addDecorator(ThemeDecorator);
