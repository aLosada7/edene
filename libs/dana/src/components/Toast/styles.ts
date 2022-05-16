import { css } from '@emotion/react';

export const toastContainer = css`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    margin: 1rem;
    z-index: 1;
`;

export const toast = css`
    position: relative;
    padding: 1rem;
    width: 350px;
    pointer-events: auto;
    background-color: hsla(0, 0%, 100%, 0.85);
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    border-radius: 0.25rem;
`;

export const toastHeader = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    margin-right: -9px;
`;
