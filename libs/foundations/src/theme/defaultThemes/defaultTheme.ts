import {
    grays,
    white,
    black,
    brandColor,
    brandHover,
    colors,
    supporting,
} from '../../palette';
import { Theme } from '../types';

export const defaultTheme: Required<Theme> = {
    title: 'default',
    lightColor: '#F8D7DA',
    color: brandColor,
    hover: brandHover,
    white,
    black,
    grays,
    colors,
    label: {
        text: grays[1],
        optionalText: supporting,
        supportingText: supporting,
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
    text: {
        color: grays[1],
    },
    heading: {
        color: grays[1],
    },
};
