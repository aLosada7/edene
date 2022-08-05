import type {
    BodySizes,
    Category,
    FontWeight,
    FontWeightDefinition,
    HeadlineSizes,
    LineHeight,
    TextSansSizes,
    TitlepieceSizes,
    TypographySizes,
} from './types';

const fontSizes = [10, 12, 14, 15, 16, 18, 20, 24, 30, 36, 42, 50];

const fonts = {
    titlepiece: 'GT Guardian Titlepiece, Georgia, serif',
    headlineSerif: 'Merriweather, Arial, sans-serif',
    bodySerif:
        'GuardianTextEgyptian, Guardian Text Egyptian Web, Georgia, serif',
    bodySans: 'Lato, Arial, sans-serif',
    // 'Lato', Arial, sans-serif;
    // 'Guardian Text Sans Web, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
};

const lineHeights = [1.15, 1.35, 1.5];

const fontWeights = [400, 500, 600, 700];

const titlepieceSizes: TitlepieceSizes = {
    small: fontSizes[8], //42px
    medium: fontSizes[9], //50px
    large: fontSizes[10], //70px
};

const headlineSizes: HeadlineSizes = {
    xxxsmall: fontSizes[5], //18px
    xxsmall: fontSizes[6], //20px
    xsmall: fontSizes[7], //24px
    small: fontSizes[8], //28px
    medium: fontSizes[9], //34px
    large: fontSizes[10], //42px
    xlarge: fontSizes[11], //50px
};

const bodySizes: BodySizes = {
    small: fontSizes[2], //15px
    medium: fontSizes[3], //17px
};

const textSansSizes: TextSansSizes = {
    xxsmall: fontSizes[0], //10px
    xsmall: fontSizes[1], //12px
    small: fontSizes[2], //14px
    medium: fontSizes[3], //15px
    large: fontSizes[4], //16px
    xlarge: fontSizes[5], //18px
    xxlarge: fontSizes[6], //20px
};

const fontSizeMapping: {
    [cat in Category]: TypographySizes;
} = {
    titlepiece: titlepieceSizes,
    headline: headlineSizes,
    body: bodySizes,
    textSans: textSansSizes,
};

const fontMapping: { [cat in Category]: string } = {
    titlepiece: fonts.titlepiece,
    headline: fonts.headlineSerif,
    body: fonts.bodySerif,
    textSans: fonts.bodySans,
};

const lineHeightMapping: { [lineHight in LineHeight]: number } = {
    tight: lineHeights[0],
    regular: lineHeights[1],
    loose: lineHeights[2],
};

const fontWeightMapping: { [fontWeight in FontWeight]: number } = {
    light: fontWeights[0],
    regular: fontWeights[1],
    bold: fontWeights[2],
    bolder: fontWeights[3],
};

const availableFonts: {
    [cat in Category]: {
        [fontWeight in FontWeight]?: FontWeightDefinition;
    };
} = {
    titlepiece: {
        bold: {
            hasItalic: false,
        },
    },
    headline: {
        light: {
            hasItalic: true,
        },
        regular: {
            hasItalic: true,
        },
        bold: {
            hasItalic: false,
        },
    },
    body: {
        regular: {
            hasItalic: true,
        },
        bold: {
            hasItalic: true,
        },
    },
    textSans: {
        light: {
            hasItalic: true,
        },
        regular: {
            hasItalic: true,
        },
        bold: {
            hasItalic: false,
        },
        bolder: {
            hasItalic: true,
        },
    },
};

Object.freeze(titlepieceSizes);
Object.freeze(headlineSizes);
Object.freeze(bodySizes);
Object.freeze(textSansSizes);
Object.freeze(fontMapping);
Object.freeze(fontSizeMapping);
Object.freeze(fontWeightMapping);
Object.freeze(lineHeightMapping);
Object.freeze(availableFonts);

export {
    titlepieceSizes,
    headlineSizes,
    bodySizes,
    textSansSizes,
    fontMapping,
    fontSizeMapping,
    lineHeightMapping,
    fontWeightMapping,
    availableFonts,
};
