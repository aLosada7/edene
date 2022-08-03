import { css } from '@emotion/react';

export const numberInputWrapper = () => css`
    position: relative;
    background: white;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
`;

export const input = css`
    flex: 1;
    text-indent: 1rem;
    font-size: 1.25rem;
    width: 200px;
    padding: 0;
    pointer-events: none;

    /* Chrome, Safari, Edge, Opera */
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    [type='number'] {
        -moz-appearance: textfield;
    }
`;

const operationButton = css`
    position: absolute;
    background: transparent;
    border: none;
    cursor: pointer;

    svg {
        width: 30px;
        height: 30px;
        fill: black;
        pointer-events: none;
    }
`;

export const sumButton = () => css`
    ${operationButton}
    right: 82px;
`;

export const subtractButton = () => css`
    ${operationButton}
    right: 118px;
`;
