import { css } from '@emotion/react';
import { colorsPalette, headline, textSans } from '@dana-foundations';
import { defaultTheme } from '@dana-theme';
import { IFontSize, ITextAlign } from './Title';
import { Color, ComponentColors } from '../../foundations/colors/types';
import {
    ColorOptions,
    isOfColor,
    isOfComponentColors,
} from '../../foundations/colors/api';

export const title = (
    mt: number,
    mb: number,
    size: IFontSize,
    text: ITextAlign
) => css`
    margin-top: calc(${mt} * 0.25rem);
    margin-bottom: calc(${mb} * 0.25rem);

    ${size === 'h3' && headline.small({ fontWeight: 'bolder' })}
    ${size === 'h4' && headline.xxsmall({ fontWeight: 'bold' })}
    ${size === 'h5' && headline.xxxsmall({ fontWeight: 'bold' })}

    text-align: ${text};
`;

export const textColorCss = ({
    color,
    theme = defaultTheme,
}: ColorOptions) => css`
    color: ${getTextColor({ theme, color })};
    fill: ${getTextColor({ theme, color })};
`;

export const getTextColor = ({ color, theme = defaultTheme }: ColorOptions) => {
    if (isOfColor(color)) return theme.palette[color as Color].background;

    if (isOfComponentColors(color))
        return colorsPalette[color as ComponentColors].background;

    return color;
};

export const flexText = css`
    display: flex;
    align-items: center;
`;
