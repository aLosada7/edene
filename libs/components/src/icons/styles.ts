import { css } from '@emotion/react';

import {
    defaultTheme,
    getColor,
    IconSize,
    iconSize,
    ThemeColor,
} from '@edene/foundations';

export const icon = (size: IconSize, ml: number, mr: number) => css`
    display: flex;
    font-size: ${iconSize[size]}px;

    margin-left: calc(${ml} * 0.25rem);
    margin-right: calc(${mr} * 0.25rem);
`;

export const iconTheme = ({ color, theme = defaultTheme }: ThemeColor) => css`
    color: ${getColor({ theme, color })};
`;
