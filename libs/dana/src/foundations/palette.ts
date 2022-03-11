export type PaletteColor = 'garnet' | 'gray' | 'teal' | 'pink' | 'transparent';

// Arrays of colours should have pillar colors first
const colors = {
    reds: [
        '#660505',
        '#8B0000',
        '#AB0613',
        '#C70000', // error-400
        '#FF5943',
        '#FF9081', // error-500
        '#FFBAC8',
        '#FFF4F2',
    ],
    oranges: [
        '#672005',
        '#8D2700',
        '#C74600',
        '#E05E00',
        '#FF7F0F',
        '#FF9941',
        '#F9B376',
        '#FEF9F5',
    ],
    blues: [
        '#003C60',
        '#004E7C',
        '#005689',
        '#0077B6',
        '#00B2FF',
        '#90DCFF',
        '#F1F8FC',
        '#001536',
        '#041F4A',
        '#052962',
        '#007ABC',
        '#506991',
        '#C1D8FC',
        '#0093E0', //focus-400
    ],
    browns: [
        '#2B2625',
        '#3E3323',
        '#574835',
        '#6B5840',
        '#866D50',
        '#A1845C',
        '#EACCA0',
        '#E7D4B9',
        '#EFE8DD',
        '#FBF6EF',
    ],
    pinks: [
        '#510043',
        '#650054',
        '#7D0068',
        '#BB3B80',
        '#FFABDB',
        '#FEC8D3',
        '#FEEEF7',
    ],
    greens: [
        '#185E36',
        '#22874D', // success-400
        '#58D08B', // success-500
        '#4B8878',
        '#65A897',
        '#69D1CA',
    ],
    grays: [
        '#000000', //grays-0
        '#121212', //grays-7
        '#1A1A1A', //grays-10
        '#333333', //grays-20
        '#707070', //grays-46
        '#999999', //grays-60
        '#DCDCDC', //grays-86
        '#EDEDED', //grays-93
        '#F6F6F6', //grays-97
        '#FFFFFF', //grays-100
        '#222527',
        '#303538',
        '#3F464A',
        '#595C5F',
        '#9DA0A2',
        '#ABC2C9',
        '#E4E5E8',
        '#EFF1F2',
    ],
};

export const grays = {
    0: colors.grays[0],
    1: colors.grays[1],
    2: colors.grays[2],
    3: colors.grays[3],
    4: colors.grays[4],
    5: colors.grays[5],
    6: colors.grays[6],
    7: colors.grays[7],
    8: colors.grays[8],
    9: colors.grays[9],
};
export const error = {
    400: colors.reds[3],
    500: colors.reds[5],
};

export const success = {
    400: colors.greens[1],
    500: colors.greens[2],
};

export const focus = {
    400: colors.blues[13],
};

export const background = {
    primary: '#161616',
    secondary: '#e5e5e5',
    toolbar: '#161616',
};

export const altBackground = {
    primary: '#161616',
    secondary: '#e5e5e5',
    toolbar: '#ffffff',
};

export const text = {
    primary: grays[7],
    supporting: grays[4],
    success: success[400],
    error: error[400],
    ctaPrimary: grays[9],
    anchorSecondary: grays[7],
    userInput: grays[7],
    inputLabel: grays[7],
    inputError: grays[7],
    inputLabelSupporting: grays[4],
    groupLabel: grays[7],
    groupLabelSupporting: grays[4],
    toolbar: '#f4f4f4',
};

export const altText = {
    primary: grays[7],
    supporting: grays[4],
    success: success[400],
    error: error[400],
    ctaPrimary: grays[9],
    anchorSecondary: grays[7],
    userInput: grays[7],
    inputLabel: grays[7],
    inputError: grays[7],
    inputLabelSupporting: grays[4],
    groupLabel: grays[7],
    groupLabelSupporting: grays[4],
    toolbar: '#1C1E20',
};

export const border = {
    primary: grays[5],
    secondary: grays[6],
    success: success[400],
    error: error[400],
    input: grays[5],
    focusHalo: focus[400],
};

export const fill = {
    headerAction: '#ffffff',
};

export const altFill = {
    headerAction: '#161616',
};

export const colorsPalette = {
    primary: {
        background: '#37B9F1',
        color: '#fff',
        hover: 'rgb(34, 139, 230)',
    },
    secondary: {
        background: '#494B67',
        color: '#fff',
        hover: '#343549',
    },
    accent: {
        background: '#FF006C',
        color: '#fff',
        hover: '#CC0056',
    },
    success: {
        background: 'rgb(48, 144, 142)',
        color: 'white',
        hover: 'rgb(44, 122, 123)',
    },
    dark: {
        background: '#100F10',
        color: '#FCFCFC',
        hover: '#485963',
    },
    teal: {
        background: 'rgb(48, 144, 142)',
        color: 'white',
        hover: 'rgb(44, 122, 123)',
    },
    gray: {
        background: 'rgb(211, 219, 229)',
        color: 'black',
        hover: 'rgb(226, 232, 240)',
    },
    pink: {
        background: 'rgb(227, 227, 232)',
        color: 'rgb(115, 112, 124)',
        hover: 'transparent',
    },
    transparent: {
        background: 'transparent',
        color: '#000',
        hover: 'transparent',
    },
    // teal: {
    //     primary: {
    //         background: 'rgb(48, 144, 142)',
    //         color: 'white',
    //         hover: 'rgb(44, 122, 123)',
    //     },
    // },
    // gray: {
    //     primary: {
    //         background: 'rgb(211, 219, 229)',
    //         color: 'black',
    //         hover: 'rgb(226, 232, 240)',
    //     },
    // },
    // pink: {
    //     default: {
    //         background: 'rgb(227, 227, 232)',
    //         color: 'rgb(115, 112, 124)',
    //         hover: 'transparent',
    //     },
    //     primary: {
    //         background: 'rgb(211, 62, 139)',
    //         color: 'white',
    //         hover: 'rgb(184, 50, 128)',
    //     },
    // },
    // transparent: {
    //     primary: {
    //         background: 'transparent',
    //         color: 'black',
    //         hover: 'transparent',
    //     },
    // },
    // garnet: {
    //     default: {
    //         background: 'rgb(227, 227, 232)',
    //         color: 'rgb(115, 112, 124)',
    //         hover: 'rgb(227, 227, 232)',
    //     },
    //     primary: {
    //         background: 'rgb(103, 14, 54)',
    //         color: 'rgba(255, 255, 255, 0.96)',
    //         hover: 'rgb(103, 14, 54)',
    //     },
    // },
};
