import { css } from '@emotion/react';

export const modal = css`
    position: absolute;
    inset: 0px;
    z-index: 11;
    overflow-y: auto;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    top: 25%;
`;

export const cardOverrides = css`
    background-color: #fff;
    width: 500px;
`;

export const cardHeader = css`
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 1rem;
`;

export const modalFooter = css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding: 1rem 1.5rem;
    background: hsl(210, 38%, 97%);
`;
