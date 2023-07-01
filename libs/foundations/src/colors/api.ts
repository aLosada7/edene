import { colorsPalette } from '../palette';
import { defaultTheme } from '../theme';
import { Theme } from '../theme/types/Theme';
import { ComponentColors, EdeneColor } from './types';

export const COMPONENT_COLORS = ['success', 'info', 'danger', 'gray'];

const isOfComponentColors = (color: string) => {
    return [
        'success',
        'info',
        'danger',
        'dark',
        'gray',
        'transparent',
    ].includes(color);
};

export interface ThemeOptions {
    theme: Theme;
    color?: EdeneColor;
}

export const getLightenColor = ({
    color,
    theme = defaultTheme,
}: ThemeOptions) => {
    if (!color || color === 'brand') return theme.lightColor;

    if (isOfComponentColors(color))
        return colorsPalette[color as ComponentColors].light;

    return color;
};

export const getColor = ({ color, theme = defaultTheme }: ThemeOptions) => {
    if (!color || color === 'primary' || color === 'brand') return theme.color;

    if (isOfComponentColors(color))
        return colorsPalette[color as ComponentColors].color;

    return color;
};

export const getDarkenColor = ({
    color,
    theme = defaultTheme,
}: ThemeOptions) => {
    if (!color || color === 'brand') return theme.hover;

    if (isOfComponentColors(color))
        return colorsPalette[color as ComponentColors].hover;

    return color;
};

export { isOfComponentColors };
