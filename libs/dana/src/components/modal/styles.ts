import { css } from '@emotion/react';

export const modal = css`
    position: absolute;
    inset: 0px;
    z-index: 11;
    overflow-y: auto;
    padding: 48px 16px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: flex-start;
`;

export const cardOverrides = css`
    background-color: #fff;
    width: 440px;
    margin: 1.4rem;
`;

export const cardHeader = css`
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 1rem;
`;
