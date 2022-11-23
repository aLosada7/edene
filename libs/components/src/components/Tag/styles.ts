import { css } from '@emotion/react';

import {
    defaultTheme,
    getColor,
    getLightenColor,
    text,
    ThemeOptions,
} from '@edene/foundations';

export const tag = css`
    ${text.small({ lineHeight: 'loose' })}

    padding: 4px 8px;
    border-radius: 12px;

    display: flex;
    align-items: center;
`;

export const tagIcon = css`
    margin-right: 4px;
`;

const tagColors = ({ theme = defaultTheme, color }: ThemeOptions) => css`
    background-color: ${getLightenColor({ theme, color })};
    color: ${getColor({ theme, color })};
`;

export const tagTheme = ({ theme = defaultTheme, color }: ThemeOptions) => css`
    ${tagColors({ theme, color })}
`;

export const tagIconTheme = ({
    theme = defaultTheme,
    color,
}: ThemeOptions) => css`
    ${tagColors({ theme, color })}
`;
