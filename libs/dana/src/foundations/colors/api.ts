import { colorsPalette } from '../palette';
import { defaultTheme } from '../theme';
import { Theme } from '../theme/types';
import { ComponentColors, EdeneColor } from './types';

const isOfComponentColors = (color: string) => {
    return ['success', 'danger', 'dark', 'gray', 'transparent'].includes(color);
};

export interface ColorOptions {
    theme: Theme;
    color?: EdeneColor;
}

export const getColor = ({ color, theme = defaultTheme }: ColorOptions) => {
    if (!color) return theme.color;

    if (isOfComponentColors(color))
        return colorsPalette[color as ComponentColors].color;

    return color;
};

export const getHoverColor = ({
    color,
    theme = defaultTheme,
}: ColorOptions) => {
    if (!color) return theme.hover;

    if (isOfComponentColors(color))
        return colorsPalette[color as ComponentColors].hover;

    return color;
};

export { isOfComponentColors };
