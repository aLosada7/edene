import { css } from '@emotion/react';

import { defaultTheme, getColor, ThemeOptions } from '@edene/foundations';

export const badge = css`
    font-size: 10px;
    font-weight: 600;
    line-height: 13px;
    padding: 2px 6px;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;
    width: fit-content;
`;

export const badgeTheme = ({
    theme = defaultTheme,
    color,
}: ThemeOptions) => css`
    background-color: ${getColor({ theme, color })};
    color: ${theme.white};
`;
