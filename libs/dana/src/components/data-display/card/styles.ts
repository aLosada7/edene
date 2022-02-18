import { css } from '@emotion/react';

export const card = css`
    display: block;
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    border-radius: 4px;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;

    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
        0 1px 3px 0 rgb(0 0 0 / 12%);
`;

export const cardBody = css`
    padding: 1rem;
`;

export const cardImage = css`
    max-width: 100%;
`;
