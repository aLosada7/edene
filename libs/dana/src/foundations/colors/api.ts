import { colorsPalette } from '../palette';
import { defaultTheme } from '../theme';
import { Theme } from '../theme/types';
import { Color, ComponentColors, DanaColor } from './types';

const isOfColor = (color: string) => {
    return ['primary', 'secondary', 'accent'].includes(color);
};

const isOfComponentColors = (color: string) => {
    return ['success', 'danger', 'dark', 'transparent'].includes(color);
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

export const getBackgroundColor = ({
    color,
    theme = defaultTheme,
}: ColorOptions) => {
    if (isOfColor(color)) return theme.palette[color as Color].background;

    if (isOfComponentColors(color))
        return colorsPalette[color as ComponentColors].background;

    return color;
};

// getSharedColorScheme

export { isOfColor, isOfComponentColors };
