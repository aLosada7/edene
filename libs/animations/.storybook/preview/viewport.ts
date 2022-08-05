import { breakpoints, Breakpoint } from '@edene/foundations';

type ViewportMeta = {
    [key in Breakpoint]: {
        name: string;
        type: string;
    };
};

// TODO: Remove any from type
const viewportMeta: ViewportMeta | any = {
    mobile: {
        name: 'Mobile',
        type: 'mobile',
    },
    mobileMedium: {
        name: 'Mobile Medium',
        type: 'mobile',
    },
    mobileLandscape: {
        name: 'Mobile Landscape',
        type: 'mobile',
    },
    phablet: {
        name: 'Phablet',
        type: 'mobile',
    },
    tablet: {
        name: 'Tablet',
        type: 'tablet',
    },
    desktop: {
        name: 'Desktop',
        type: 'desktop',
    },
    leftCol: {
        name: 'Left Col',
        type: 'desktop',
    },
    wide: {
        name: 'Wide',
        type: 'desktop',
    },
};

const viewportEntries = Object.entries(breakpoints).map(([name, width]) => {
    return [
        name,
        {
            name: viewportMeta[name].name,
            styles: {
                width: `${width}px`,
                height: '100%',
                padding: '0',
            },
            type: viewportMeta[name].type,
        },
    ];
});

export const viewport = {
    viewports: {
        ...Object.fromEntries(viewportEntries),
    },
};
