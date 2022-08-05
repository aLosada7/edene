import { css } from '@emotion/react';

import { EdeneColor, getColor, defaultTheme, Theme } from '@edene/foundations';

export const badge = ({ theme = defaultTheme }, color?: EdeneColor) => css`
    ${badgeColorStyles(theme, getColor({ theme, color }))};

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

const badgeColorStyles = (theme: Theme, color: string) => css`
    background-color: ${color};
    color: ${theme.black};
`;
