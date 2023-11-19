import { ThemeDecorator } from '@edene/foundations';
import { addDecorator } from '@storybook/react';
import * as nextImage from 'next/image';

import './preview/styles.scss';
import { backgrounds } from './preview/backgrounds';
import { viewport } from './preview/viewport';

// eslint-disable-next-line no-import-assign
Object.defineProperty(nextImage, 'default', {
    configurable: true,
    // eslint-disable-next-line jsx-a11y/alt-text
    value: (props) => <img {...props} />,
});

export const parameters = {
    backgrounds,
    layout: 'centered',
    options: {
        storySort: {
            order: [
                'Getting Started',
                'Developer Guide',
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
