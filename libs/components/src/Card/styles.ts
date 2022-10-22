import { css } from '@emotion/react';

import { defaultTheme, from, grays } from '@edene/foundations';

export const card = css`
    display: block !important;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    border-radius: 8px;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    width: 100%;

    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
        0 1px 3px 0 rgb(0 0 0 / 12%);

    ${from.tablet} {
        display: flex !important;
        flex-wrap: wrap;
    }
`;

export const cardTheme = ({ theme = defaultTheme }) => css`
    background-color: ${theme.grays[9]};
`;

export const cardHeader = css`
    min-height: 1rem;
    padding: 0.75rem 1.5rem;
    letter-spacing: 0.5px;
`;

export const cardSection = (
    flex: number,
    borderBottom?: boolean,
    borderRight?: boolean
) => css`
    padding: 12px 24px;
    width: 100%;
    display: block;

    ${from.tablet &&
    `flex-basis: ${flex}%;
    `}

    ${borderBottom && `border-bottom: 1px solid ${grays[7]};`}
    ${borderRight && `border-right: 1px solid ${grays[7]};`}
`;

export const cardMedia = css`
    max-width: 100%;
`;
