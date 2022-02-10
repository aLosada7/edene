import { css } from '@emotion/react';

export const numberInputWrapper = () => css`
    position: relative;
    background: white;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    border: 2px solid rgb(153, 153, 153);
`;

export const input = () => css`
    flex: 1;
    border: 0;
    outline: none;
    background: transparent;
    text-indent: 1rem;
    font-size: 1.25rem;
    width: 200px;

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

export const sumButton = () => css`
    position: absolute;
    right: 12px;
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

export const subtractButton = () => css`
    position: absolute;
    right: 50px;
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
