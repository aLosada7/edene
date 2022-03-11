import { css } from '@emotion/react';
import { transitions } from '../../foundations/animation';

export const menu = () => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: ${transitions.medium};
    border: none;
    margin: 0.75rem;
    background: transparent;
    height: 100%;
`;

export const menuLine = (variant: 'light' | 'dark') => css`
    position: absolute;
    left: 0;
    width: 20px;
    height: 2px;
    background: black;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(110, 101, 47, 0.2);
    transition: ${transitions.medium};

    ::before,
    ::after {
        content: '';
        position: absolute;
        left: 0;
        width: 20px;
        height: 2px;
        background: black;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(110, 101, 47, 0.2);
        transition: ${transitions.medium};
    }

    ::before {
        transform: translate(0, -4px);
    }

    ::after {
        transform: translate(0, 4px);
    }

    ${variant === 'light' &&
    `background: #f4f4f4;

    ::before,
    ::after {
        background: #f4f4f4;
    }`}

    ${variant === 'dark' &&
    `background: #161616;

    ::before,
    ::after {
        background: #161616;
    }`}
`;

export const menuOpen = css`
    background: transparent;
    box-shadow: none;

    ::before {
        transform: rotate(45deg);
    }

    ::after {
        transform: rotate(-45deg);
    }
`;
