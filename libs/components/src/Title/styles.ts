import { css } from '@emotion/react';
import {
    defaultTheme,
    headline,
    ThemeOptions,
    getColor,
    FontWeight,
} from '@edene/foundations';
import { IFontSize, ITextAlign } from './Title';

export const title = (
    mt: number,
    mb: number,
    size: IFontSize,
    fontWeight: FontWeight,
    text: ITextAlign,
    actions?: boolean
) => css`
    margin-top: calc(${mt} * 0.25rem);
    margin-bottom: calc(${mb} * 0.25rem);

    ${size === 'h3' && headline.small({ fontWeight })}
    ${size === 'h4' && headline.xxsmall({ fontWeight })}
    ${size === 'h5' && headline.xxxsmall({ fontWeight })}

    text-align: ${text};

    ${actions &&
    `display: flex;
    justify-content: space-between;`}
`;

export const textColorCss = ({
    color,
    theme = defaultTheme,
}: ThemeOptions) => css`
    color: ${getColor({ theme, color })};
    fill: ${getColor({ theme, color })};
`;

export const flexText = css`
    display: flex;
    align-items: center;
`;
