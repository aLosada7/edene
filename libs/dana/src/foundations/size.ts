export type IButtonSize = 'xsmall' | 'small' | 'medium' | 'large';

export const buttonSize = {
    xsmall: { font: '12px', padding: 2 },
    small: { font: '14px', padding: 3 },
    medium: { font: '16px', padding: 4 },
    large: { font: '18px', padding: 6 },
};

export const iconSize = {
    xsmall: 20,
    small: 26,
    medium: 16,
    large: 40,
    big: 60,
};

// momentarily
export const size = {
    xsmall: 24,
    small: 36,
    medium: 44,
};

export const height = {
    ctaMedium: size.medium,
    ctaSmall: size.small,
    ctaXsmall: size.xsmall,
    inputMedium: size.medium,
    inputXsmall: size.xsmall,
    iconMedium: iconSize.medium,
    iconSmall: iconSize.small,
    iconXsmall: iconSize.xsmall,
};
