import { css } from '@emotion/react';

import { grays, height, text } from '@edene/foundations';

export const select = css`
    position: relative;
    padding: 0;
`;

export const selectButton = css`
    display: flex;
    align-items: center;
    padding: 0;
    height: 100%;
    background: transparent;
    border: none;
    color: black;
    padding: 0 0.5rem;
    position: absolute;
    right: 0;

    :hover {
        background-color: transparent;
    }
`;

export const selectButtonIconRight = css`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 30px;
    height: ${height.inputMedium}px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
`;

export const selectItems = css`
    position: absolute;
    padding: 0;
    border: 1px solid ${grays[8]};
    background-color: #fff;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s;
    border-radius: 0 0 10px 10px;
    max-height: 150px;
    overflow-y: scroll;
    margin-top: 4px;
    z-index: 300;
    width: -webkit-fill-available;
`;

export const showItems = css`
    visibility: visible;
    opacity: 1;
`;

export const option = css`
    ${text.regular({ lineHeight: 'regular' })};
    z-index: 300;
    padding: 100px;
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0.5rem;
    margin: 0.25rem;
    border-radius: 0.5rem;
    cursor: pointer;

    :hover {
        background-color: ${grays[8]};
    }
`;
