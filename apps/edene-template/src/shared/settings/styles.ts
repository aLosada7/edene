import { css } from '@emotion/react';

import { transitions, Theme } from '@edene/foundations';

export const settings = (theme: Theme) => css`
    position: fixed;
    top: 275px;
    right: 0;

    width: 40px;
    height: 40px;

    background-color: ${theme.color};
    color: ${theme.white};

    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 98;
`;

export const settingsContent = (open: boolean) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;

    width: 300px;
    height: 100vh;

    background-color: white;
    z-index: 100;

    transform: ${open ? 'translateX(0px)' : 'translateX(300px)'};
    transition: transform ${transitions.medium};
`;

export const settingsContentHeader = (theme: Theme) => css`
    background-color: ${theme.color};
    color: ${theme.white};
`;

export const settingsContentHeaderContent = css`
    height: 5rem;
`;

export const overlay = css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(22, 22, 22, 0.5);
    z-index: 99;
`;

export const settingsThemeOption = css`
    background-color: rgba(148, 163, 184, 0.12);

    margin: 0.5rem;
    padding: 0.75rem 1rem;

    border-radius: 10px;
    border-width: 2px;
    border-style: solid;

    display: flex;
    align-items: center;

    cursor: pointer;

    span {
        width: 10px;
        height: 10px;

        border-radius: 10px;

        display: flex;
    }

    div {
        text-transform: capitalize;
        margin-left: 10px;
    }
`;
