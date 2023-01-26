import { css } from '@emotion/react';
import {
    defaultTheme,
    heading,
    FontWeight,
    TextAlign,
} from '@edene/foundations';
import { IFontSize } from './Heading';

export const headingCss = (
    mt: number,
    mb: number,
    size: IFontSize,
    fontWeight: FontWeight,
    align: TextAlign
) => css`
    margin-top: calc(${mt} * 0.25rem);
    margin-bottom: calc(${mb} * 0.25rem);

    ${size === 'h1' && heading.h1({ fontWeight })}
    ${size === 'h2' && heading.h2({ fontWeight })}
    ${size === 'h3' && heading.h3({ fontWeight })}
    ${size === 'h4' && heading.h4({ fontWeight })}
    ${size === 'h5' && heading.h5({ fontWeight })}
    ${size === 'h6' && heading.h6({ fontWeight })}

    text-align: ${align};
`;

export const headingColor = (
    themeColor = defaultTheme.heading.color,
    color?: string
) => css`
    color: ${color || themeColor};
    fill: ${color || themeColor};
`;

export const flexText = css`
    display: flex;
    align-items: center;
`;
