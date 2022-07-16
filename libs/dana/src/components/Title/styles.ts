import { css } from '@emotion/react';
import { headline } from '@dana-foundations';
import { defaultTheme } from '@dana-theme';
import { IFontSize, ITextAlign } from './Title';
import { ColorOptions, getColor } from '../../foundations/colors/api';

export const title = (
    mt: number,
    mb: number,
    size: IFontSize,
    text: ITextAlign
) => css`
    margin-top: calc(${mt} * 0.25rem);
    margin-bottom: calc(${mb} * 0.25rem);

    ${size === 'h3' && headline.small({ fontWeight: 'bolder' })}
    ${size === 'h4' && headline.xxsmall({ fontWeight: 'bold' })}
    ${size === 'h5' && headline.xxxsmall({ fontWeight: 'bold' })}

    text-align: ${text};
`;

export const textColorCss = ({
    color,
    theme = defaultTheme,
}: ColorOptions) => css`
    color: ${getColor({ theme, color })};
    fill: ${getColor({ theme, color })};
`;

export const flexText = css`
    display: flex;
    align-items: center;
`;
