import { css } from '@emotion/react';
import { ThemeColor, defaultTheme, getColor, text } from '@edene/foundations';

export const alert = css`
    ${text.small({ lineHeight: 'loose' })}

    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const alertTheme = ({ color, theme = defaultTheme }: ThemeColor) => css`
    background-color: ${getColor({ theme, color })};
`;

export const alertActions = css`
    display: grid;
`;
