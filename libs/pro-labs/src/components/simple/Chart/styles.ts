import { css } from '@emotion/react';
import { Theme } from '@edene/foundations';

export const card = css`
    position: relative;
    background: #1b1d1c;
    width: 360px;
    border-radius: 10px;
    box-shadow: 0 50px 100px rgba(0, 0, 0, 0.08);
`;

export const header = (theme: Theme) => css`
    padding: 32px 20px 32px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
    }

    button.active {
        background: ${theme.color};
        color: #f9f9f9;
        border-radius: 3px;
        padding: 8px 12px;
    }
`;

export const chart = css`
    height: 160px;
`;
