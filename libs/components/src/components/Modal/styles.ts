import { css } from '@emotion/react';

import { from, shadows } from '@edene/foundations';

export const modal = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 3rem 1rem;
    background-color: rgba(22, 22, 22, 0.5);
    z-index: 9000;
    opacity: 1;
    transition: opacity 200ms;
    visibility: visible;
`;

export const cardOverrides = css`
    background-color: #fff;
    width: fit-content !important;
    box-shadow: ${shadows.darkest};

    ${from.phablet} {
        height: auto;
        min-width: 500px;
        max-width: 75%;
    }
`;

export const cardPadding = css`
    padding: 1.2rem 2rem;
`;

export const modalHeader = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-right: -9px;
`;
