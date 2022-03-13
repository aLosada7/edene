import { css } from '@emotion/react';
import { colorsPalette, textSans } from '@dana-foundations';
import { defaultTheme } from '@dana-theme';
import { ITextFontSize, ITextAlign } from './Text';
import { Color, ComponentColors } from '../../foundations/colors/types';
import {
    ColorOptions,
    isOfColor,
    isOfComponentColors,
} from '../../foundations/colors/api';
import { FontWeight } from '../../foundations/typography/types';

export const text = (
    mt: number,
    mb: number,
    size: ITextFontSize,
    text: ITextAlign,
    weight?: FontWeight
) => css`
    margin-top: calc(${mt} * 0.25rem);
    margin-bottom: calc(${mb} * 0.25rem);

    // from bbc
    ${size === 'xxsm' && textSans.xxsmall({ fontWeight: 'light' })}
    ${size === 'xsm' && textSans.xsmall({ fontWeight: 'light' })}
    ${size === 'sm' && textSans.small({ fontWeight: 'light' })}
    ${size === 'md' && textSans.medium({ fontWeight: 'light' })}
    ${size === 'lg' && textSans.large({ fontWeight: 'light' })}
    ${size === 'xlg' && textSans.xlarge({ fontWeight: 'light' })}
    ${size === 'xxlg' && textSans.xxlarge({ fontWeight: 'light' })}
    ${size === 'xxxlg' && textSans.xxxlarge({ fontWeight: 'light' })}

    ${weight && `font-weight: ${weight};`}

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
