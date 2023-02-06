export * from './types';

export const buttonSize = {
    xsmall: { font: '12px', padding: 2 },
    small: { font: '14px', padding: 3 },
    medium: { font: '16px', padding: 4 },
    large: { font: '18px', padding: 6 },
};

export const iconSize = {
    xsmall: 12,
    small: 16,
    medium: 20,
    large: 28,
    big: 48,
};

// momentarily
export const size = {
    small: 24,
    medium: 36,
    large: 44,
};

export const height = {
    ctaSmall: size.small,
    ctaMedium: size.medium,
    ctaLarge: size.large,
    inputSmall: size.small,
    inputMedium: size.medium,
    inputLarge: size.large,
    iconXsmall: iconSize.xsmall,
    iconSmall: iconSize.small,
    iconMedium: iconSize.medium,
    iconLarge: iconSize.large,
    iconBig: iconSize.big,
};

export type Scale =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 6
    | 8
    | 10
    | 12
    | 24
    | 32
    | 48
    | 64
    | 128
    | 160
    | 192;
