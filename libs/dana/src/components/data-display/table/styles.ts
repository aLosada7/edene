import { css } from '@emotion/react';

export const figcaption = css`
    border-left: 1px solid rgb(110, 110, 115);
    color: rgb(110, 110, 115);
    font-weight: bold; // TODO: change to normal
    padding-left: 0.5rem;
`;

// TableContainer
export const tableContainerHeader = css`
    padding: 1rem 0 1.5rem 1rem;
    background: #f4f4f4;
`;

// TableToolbar
export const tableToolbar = css`
    position: relative;
    display: flex;
    width: 100%;
    min-height: 3rem;
    background-color: #f4f4f4;
`;

export const tableToolbarContent = css`
    display: flex;
    width: 100%;
    height: 3rem;
    justify-content: flex-end;
`;

export const tableToolbarSearch = css`
    position: relative;
    width: 3rem;
    height: 3rem;
    box-shadow: none;
    cursor: pointer;
    transition: width 240ms cubic-bezier(0.2, 0, 0.38, 0.9),
        background-color 110ms cubic-bezier(0, 0, 0.38, 0.9);
    display: flex;
    align-items: center;
`;

export const tableToolbarSearchInput = css`
    height: 100%;
    border-radius: 0;
`;

export const tableToolbarSearchOpen = css`
    width: 100%;
`;

export const tableToolbarSearchButton = css`
    height: 100%;
    width: 100%;
    border-radius: 0;
    position: absolute;
`;

// Table
export const tableContent = css`
    overflow-x: auto;
`;

export const table = css`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
`;

// Head
export const thead = css`
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.28572;
    letter-spacing: 0.16px;
    background-color: #e0e0e0;
`;

export const cellAlign = (align: string) => css`
    text-align: ${align};
`;

// Body
export const tbody = css`
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.28572;
    letter-spacing: 0.16px;
    width: 100%;
    background-color: #f4f4f4;
`;

export const tr = css`
    width: 100%;
    height: 3rem;
    border: none;
`;
