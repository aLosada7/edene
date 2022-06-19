import { css } from '@emotion/react';

import { IToastVariant } from './types';
import { info, error, success } from '../../foundations/palette';
import { textSans } from '../../foundations/typography';

export const toastContainer = css`
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    margin: 1rem;
    z-index: 1;
`;

const getToastColor = (color: IToastVariant) => {
    if (color === 'success') return success;
    if (color === 'error') return error;
    return info;
};

export const toast = (variant: IToastVariant) => css`
    position: relative;
    flex-direction: column;
    padding: 1rem;
    width: 400px;
    pointer-events: auto;
    background-color: hsla(0, 0%, 100%, 0.85);
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
    border-radius: 0.25rem;

    :before {
        content: '';
        position: absolute;
        height: 80%;
        width: 1px;
        border-left: 5px solid;
        border-left-color: ${getToastColor(variant)};
        top: 8px;
        left: 5px;
        display: flex;
        align-items: center;
    }
`;

export const toastIcon = (variant: IToastVariant) => css`
    background: ${getToastColor(variant)};
    border-radius: 50%;
    color: white;
    position: absolute;
    top: 50%;
    left: 8px;
    width: 30px;
    height: 30px;
    transform: translate(50%, -50%);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const toastHeader = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 55px;
`;

export const toastTitle = css`
    width: 300px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const toastBody = css`
    ${textSans.medium({ fontWeight: 'regular' })};
    margin-left: 55px;
`;
