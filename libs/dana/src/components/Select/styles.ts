import { grays, textSans } from '@dana-foundations';
import { css } from '@emotion/react';

export const select = css`
    position: relative;
    padding: 0;
`;

export const selectButton = css`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0;
    height: 100%;
    background: transparent;
    border: none;
    color: black;
    padding: 0 0.5rem;

    :hover {
        background-color: transparent;
    }
`;

export const selectItems = css`
    position: absolute;
    background: ${grays[8]};
    color: ${grays[2]};
    padding: 0 0.5rem 0.5rem;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 0 0 10px 10px;
    max-height: 150px;
    overflow-y: scroll;
    margin-top: 0;
    z-index: 10;
    width: -webkit-fill-available;
`;

export const showItems = css`
    visibility: visible;
    opacity: 1;
`;

export const option = css`
    ${textSans.medium({ lineHeight: 'regular' })};
    padding: 100px;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
`;
