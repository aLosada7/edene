import { defaultTheme, getColor, ThemeColor } from '@edene/foundations';
import { css } from '@emotion/react';

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
    display: flex;
`;

export const badgeTheme = ({ theme = defaultTheme, color }: ThemeColor) => css`
    background-color: ${getColor({ theme, color })};
    color: ${theme.white};
`;
