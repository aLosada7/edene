import { colorsPalette } from '../palette';
import { defaultTheme } from '../theme';
import { Theme } from '../theme/types';
import { Color, ComponentColors, DanaColor } from './types';

const isOfColor = (color: string) => {
    return ['primary', 'secondary', 'accent'].includes(color);
};

const isOfComponentColors = (color: string) => {
    return ['success', 'dark', 'transparent'].includes(color);
};

export interface ColorOptions {
    theme?: Theme;
    color: DanaColor;
}

export const getColor = ({ color, theme = defaultTheme }: ColorOptions) => {
    if (isOfColor(color)) return theme.palette[color as Color].color;

    if (isOfComponentColors(color))
        return colorsPalette[color as ComponentColors].color;

    return color;
};

// getSharedColorScheme

export { isOfColor, isOfComponentColors };
