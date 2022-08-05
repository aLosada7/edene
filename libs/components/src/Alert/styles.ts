import { css } from '@emotion/react';
import { ThemeOptions, defaultTheme, getColor } from '@edene/foundations';

export const alert = css`
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
`;

export const alertTheme = ({
    color,
    theme = defaultTheme,
}: ThemeOptions) => css`
    background-color: ${getColor({ theme, color })};
    color: ${theme.white};
`;
