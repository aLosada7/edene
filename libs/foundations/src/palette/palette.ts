// Arrays of colours should have pillar colors first
export const colors = {
    reds: [
        '#660505',
        '#8B0000',
        '#AB0613',
        '#C70000', // error
        '#FF5943',
        '#FF9081',
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
        '#0077B6', // info
        '#00B2FF',
        '#90DCFF',
        '#F1F8FC',
        '#001536',
        '#041F4A',
        '#052962',
        '#007ABC',
        '#506991',
        '#C1D8FC',
        '#0093E0', //focus
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
        '#22874D', // success
        '#58D08B',
        '#4B8878',
        '#65A897',
        '#69D1CA',
    ],
    grays: [
        '#212529', //grays-0
        '#343a40', //grays-7
        '#495057', //grays-10
        '#868e96', //grays-20
        '#adb5bd', //grays-46
        '#ced4da', //grays-60
        '#dee2e6', //grays-86
        '#e9ecef', //grays-93
        '#f1f3f5', //grays-97
        '#F8F9FA', //grays-100
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

export const brandColor = 'rgb(250, 82, 82)';
export const brandHover = 'rgb(240, 62, 62)';

export const white = '#FCFCFC';
export const black = '#1C1E20';

export const info = colors.blues[3];
export const error = colors.reds[3];
export const success = colors.greens[1];

export const focus = colors.blues[13];

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
    primary: grays[0],
    supporting: grays[4],
    success: success,
    error: error,
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
    success: success,
    error: error,
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
    success: success,
    error: error,
    input: grays[5],
    focusHalo: focus,
};

export const fill = {
    headerAction: '#ffffff',
};

export const altFill = {
    headerAction: '#161616',
};

export const colorsPalette = {
    success: {
        light: '#E1F9F5',
        color: 'rgb(48, 144, 142)',
        dark: '#155724',
        hover: 'rgb(44, 122, 123)',
    },
    info: {
        light: '#EBF6FA',
        color: '#2A789A',
        dark: '#155724',
        hover: 'rgb(44, 122, 123)',
    },
    danger: {
        light: '#f8d7da',
        color: '#DC3545',
        dark: '#721c24',
        hover: '#C82333',
    },
    gray: {
        light: '#F2F2F2',
        color: '#6F6F6F',
        hover: 'rgb(226, 232, 240)',
    },
    dark: {
        light: '#f8d7da',
        color: '#100F10',
        hover: '#485963',
    },
    teal: {
        light: '#f8d7da',
        color: 'rgb(48, 144, 142)',
        hover: 'rgb(44, 122, 123)',
    },
    pink: {
        light: '#f8d7da',
        color: 'rgb(227, 227, 232)',
        hover: 'transparent',
    },
    transparent: {
        light: '#f8d7da',
        color: 'transparent',
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
