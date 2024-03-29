import {
    defaultTheme,
    getColor,
    getLightenColor,
    text,
    ThemeColor,
} from '@edene/foundations';
import { css } from '@emotion/react';

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

const tagColors = ({ theme = defaultTheme, color }: ThemeColor) => css`
    background-color: ${getLightenColor({ theme, color })};
    color: ${getColor({ theme, color })};
`;

export const tagTheme = ({ theme = defaultTheme, color }: ThemeColor) => css`
    ${tagColors({ theme, color })}
`;

export const tagIconTheme = ({
    theme = defaultTheme,
    color,
}: ThemeColor) => css`
    ${tagColors({ theme, color })}
`;
