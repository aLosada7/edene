import { background, colorsPalette, fill, text } from '../palette';
import { Theme } from './types';

export const defaultTheme: Theme = {
    title: 'garnet',
    ...colorsPalette.garnet,
    label: {
        text: text.inputLabel,
        optionalText: text.supporting,
        supportingText: text.supporting,
    },
    header: {
        background: '#161616',
        text: '#f4f4f4',
        headerGlobalAction: {
            fill: '#ffffff',
        },
    },
};

/** deprecated */
export const defaultThemeOld = { text, background, fill };
