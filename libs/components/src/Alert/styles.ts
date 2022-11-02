import { css } from '@emotion/react';
import {
    ThemeOptions,
    defaultTheme,
    getColor,
    textSans,
    getLightenColor,
} from '@edene/foundations';

export const alert = css`
    ${textSans.small({ lineHeight: 'loose' })}

    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const alertTheme = ({
    color,
    theme = defaultTheme,
}: ThemeOptions) => css`
    background-color: ${getLightenColor({ theme, color })};
    color: ${getColor({ theme, color })};
`;

export const alertActions = css`
    display: grid;
`;
