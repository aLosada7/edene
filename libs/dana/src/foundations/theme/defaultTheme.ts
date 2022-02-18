import { background, colorsPalette, fill, text } from '../palette';
import { Theme } from './types';

export const defaultTheme: Theme = {
    title: 'black',
    ...colorsPalette.black,
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
    sideNav: {
        background: 'transparent',
        active: 'transparent',
        hover: '#e5e5e5',
    },
};

/** deprecated */
export const defaultThemeOld = { text, background, fill };
