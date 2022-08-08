import { css } from '@emotion/react';

import {
    defaultTheme,
    getColor,
    IconSize,
    iconSize,
    ThemeOptions,
} from '@edene/foundations';

export const icon = (size: IconSize) => css`
    font-size: ${iconSize[size]}px;
`;

export const iconTheme = ({ color, theme = defaultTheme }: ThemeOptions) => css`
    color: ${getColor({ theme, color })};
`;
