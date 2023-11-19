import {
    black,
    brandColor,
    brandHover,
    colors,
    grays,
    supporting,
    white,
} from '../../palette';
import { Theme } from '../ThemeProvider';

export const defaultTheme: Theme = {
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
        backgroundColor: '#161616',
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
