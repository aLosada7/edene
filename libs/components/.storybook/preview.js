import {
    blueTheme,
    defaultTheme,
    tealTheme,
    ThemeProvider,
} from '@edene/foundations';
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

const getTheme = (theme) => {
    switch (theme) {
        case 'teal':
            return tealTheme;
        case 'blue':
            return blueTheme;
        default:
            return defaultTheme;
    }
};

export const decorators = [
    (Story, context) => {
        const theme = getTheme(context.globals.theme);

        return (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        );
    },
];

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Select theme',
        defaultValue: 'default',
        toolbar: {
            title: 'Theme',
            items: [
                { title: 'Default', value: 'default' },
                { title: 'Teal', value: 'teal' },
                { title: 'Blue', value: 'blue' },
            ],
        },
    },
};
