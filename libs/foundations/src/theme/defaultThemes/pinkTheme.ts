import { grays, text } from '../../palette';
import { Theme } from '..';

export const pinkTheme: Partial<Theme> = {
    name: 'pink',
    color: 'rgb(244, 63, 94)',
    hover: 'rgb(115, 112, 124)',
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
