import { grays, textSans } from '@dana-foundations';
import { css } from '@emotion/react';

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
    ${textSans.xsmall({ fontWeight: 'bold' })}
    background-color: ${grays[8]};
`;

export const tr = css`
    width: 100%;
    height: 3rem;
    border: none;
    color: ${grays[2]};
`;

export const cellAlign = (align: string) => css`
    text-align: ${align};
`;

// Body
export const tbody = css`
    width: 100%;
    background-color: ${grays[9]};
`;

export const cell = css`
    ${textSans.xsmall({ fontWeight: 'light', lineHeight: 'loose' })}
    color: ${grays[1]};
`;
