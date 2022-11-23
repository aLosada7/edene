import type {
    Category,
    FontWeight,
    FontWeightDefinition,
    HeadingSizes,
    LineHeight,
    TextSansSizes,
    TypographySizes,
} from './types';

const fontSizes = [10, 12, 14, 16, 18, 20, 24, 32];

const fonts = {
    titlepiece: 'GT Guardian Headingpiece, Georgia, serif',
    headlineSerif: 'Merriweather, Arial, sans-serif',
    bodySerif:
        'GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif',

    bodySans: 'Lato, Arial, sans-serif',
    // 'Lato', Arial, sans-serif;
    // 'Guardian Text Sans Web, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
};

const lineHeights = [1.15, 1.35, 1.5];

const fontWeights = [400, 600];

const headlineSizes: HeadingSizes = {
    h1: fontSizes[7], //32px
    h2: fontSizes[6], //24px
    h3: fontSizes[5], //20px
    h4: fontSizes[4], //18px
    h5: fontSizes[3], //16px
    h6: fontSizes[2], //14px
};

const textSansSizes: TextSansSizes = {
    regular: fontSizes[3], // 16px
    small: fontSizes[2], // 14px
    xsmall: fontSizes[1], // 12px
    xxsmall: fontSizes[0], // 10px
};

const fontSizeMapping: {
    [cat in Category]: TypographySizes;
} = {
    heading: headlineSizes,
    text: textSansSizes,
};

const fontMapping: { [cat in Category]: string } = {
    heading: fonts.headlineSerif,
    text: fonts.bodySans,
};

const lineHeightMapping: { [lineHight in LineHeight]: number } = {
    tight: lineHeights[0],
    regular: lineHeights[1],
    loose: lineHeights[2],
};

const fontWeightMapping: { [fontWeight in FontWeight]: number } = {
    regular: fontWeights[0], // 400
    bold: fontWeights[1], // 600
};

const availableFonts: {
    [cat in Category]: {
        [fontWeight in FontWeight]?: FontWeightDefinition;
    };
} = {
    heading: {
        regular: {
            hasItalic: false,
        },
        bold: {
            hasItalic: false,
        },
    },
    text: {
        regular: {
            hasItalic: false,
        },
        bold: {
            hasItalic: false,
        },
    },
};

Object.freeze(headlineSizes);
Object.freeze(textSansSizes);
Object.freeze(fontMapping);
Object.freeze(fontSizeMapping);
Object.freeze(fontWeightMapping);
Object.freeze(lineHeightMapping);
Object.freeze(availableFonts);

export {
    headlineSizes,
    textSansSizes,
    fontMapping,
    fontSizeMapping,
    lineHeightMapping,
    fontWeightMapping,
    availableFonts,
};
