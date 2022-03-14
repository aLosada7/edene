import { css } from '@emotion/react';

export const tabs = css`
    display: flex;
    overflow: auto hidden;
    width: auto;
    max-width: 100%;
    flex-direction: row;
    padding: 0;
    margin: 0;
    list-style: none;
    outline: 0;
`;

export const tab = css`
    display: flex;
    padding: 0;
    cursor: pointer;
`;

export const tabSelected = css`
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.28572;
    letter-spacing: 0.16px;
    border-bottom: 2px solid #0f62fe;
    color: #161616;
`;
