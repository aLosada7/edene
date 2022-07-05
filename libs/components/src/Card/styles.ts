import { css } from '@emotion/react';

import { from, grays, textSans } from '@edene/foundations';

export const card = css`
    display: block;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    border-radius: 8px;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;

    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
        0 1px 3px 0 rgb(0 0 0 / 12%);

    ${from.phablet} {
        width: 100%;
    }
`;

export const cardHeader = css`
    min-height: 1rem;
    padding: 0.5rem;
    background-color: ${grays[8]};
    color: ${grays[2]};
    letter-spacing: 0.5px;

    div {
        ${textSans.xsmall({ fontWeight: 'bold' })}
    }
`;

export const cardBody = css`
    padding: 20px 1rem;

    ${textSans.xsmall({ fontWeight: 'light', lineHeight: 'loose' })}
    color: ${grays[1]};
`;

export const cardImage = css`
    max-width: 100%;
`;
