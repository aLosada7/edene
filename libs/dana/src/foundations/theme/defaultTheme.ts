import {
    background,
    fill,
    grays,
    text,
    white,
    black,
    brandColor,
    brandHover,
    colors,
} from '../palette';
import { Theme } from './types';

export const defaultTheme: Theme = {
    name: 'default',
    color: brandColor,
    hover: brandHover,
    white,
    black,
    colors,
    label: {
        text: grays[1],
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
    text: grays[1],
    title: {
        h4: 'hsl(202, 57%, 15%)',
        h5: 'hsl(201, 23%, 34%)',
    },
};

/** deprecated */
export const defaultThemeOld = { text, background, fill };
