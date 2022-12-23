import { css } from '@emotion/react';

export const card = css`
    position: relative;
    background: #1b1d1c;
    width: 360px;
    border-radius: 10px;
    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.08);
`;

export const header = css`
    padding: 32px 20px 32px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
    }

    button.active {
        background: #13ae94;
        color: #f9f9f9;
        border-radius: 3px;
        padding: 8px 12px;
    }
`;

export const chart = css`
    height: 160px;
`;
