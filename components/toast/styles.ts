import { css } from '@emotion/react';

export const toast = css`
    position: relative;
    box-shadow: rgb(0 0 0 / 11%) 0 0 0 1px, rgb(0 0 0 / 5%) 0 10px 10px -5px;
    background: white;
    width: 100%;
    min-width: 400px;
    max-width: 33vw;
    border-radius: 10px;
    opacity: 1;
    transition-property: opacity, visibility;
    transition-duration: 0.35s;
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
    display: flex;
`;

export const closeButton = css`
    align-self: flex-start;
`;

export const toaster = css`
    position: fixed;
    z-index: 9999;
`;
