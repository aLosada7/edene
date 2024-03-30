import {
    buttonSize,
    defaultTheme,
    disabled,
    getColor,
    getDarkenColor,
    grays,
    ThemeColor,
} from '@edene/foundations';
import { css } from '@emotion/react';

import { ButtonBlock, ButtonSize, ButtonVariant } from './types';

export const btnGroup = (size?: ButtonSize | ButtonBlock) => css`
    display: inline-flex;

    *:not(:first-of-type) {
        margin-inline-start: 0.5rem;
    }

    ${size === 'block' && `width: 100%;`}
`;

export const btn = (size: ButtonSize) => css`
    font-weight: 400;
    letter-spacing: 0.16px;
    min-width: 2.5rem;
    border-radius: 4px;
    cursor: pointer;
    text-align: left;
    text-decoration: none;
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    display: inline-flex;
    align-items: center;
    user-select: none;
    position: relative;
    white-space: nowrap;
    vertical-align: middle;
    justify-content: center;
    outline: transparent solid 2px;
    outline-offset: 2px;
    margin: 0;
    width: auto;
    line-height: 1.2;
    font-size: ${buttonSize[size].font};
    padding: 8px calc(${buttonSize[size].padding} * 0.25rem);

    &[disabled] {
        ${disabled}
    }
`;

export const btnColor = (
    { theme = defaultTheme, color }: ThemeColor,
    variant: ButtonVariant,
    isButtonBlock: boolean
) => css`
    ${buttonColorStyles(
        theme,
        getColor({ theme, color }),
        getDarkenColor({ theme, color }),
        variant
    )};

    ${isButtonBlock && `width: 100%;`}
`;

const buttonColorStyles = (
    theme: any,
    color: string,
    hoverColor: string,
    variant: ButtonVariant
) => css`
    background-color: ${color};
    border: 1px solid ${color};
    color: ${theme.white};
    fill: ${theme.white};
    :hover {
        background-color: ${hoverColor};
    }

    ${variant === 'outlined' &&
    `
    background-color: transparent;
    color: ${color};
    fill: ${color};
    border-color: ${color};

    :hover {
        background-color: ${grays[9]};
        color: ${hoverColor};
        fill: ${hoverColor};
        border-color: ${hoverColor};
    }
    `}

    ${variant === 'text' &&
    `
    background-color: transparent;
    color: ${color};
    fill: ${color};
    border: none;
    :hover {
        background-color: transparent;
        color: ${hoverColor}
    }
    `}
`;

const buttonIcon = css`
    display: inline-flex;
    align-self: center;
    flex-shrink: 0;
`;

export const buttonIconLeft = (isButtonBlock: boolean) => css`
    ${buttonIcon}

    margin-inline-end: ${isButtonBlock ? '.25' : '.5'}rem;
`;

export const buttonIconRight = (isButtonBlock: boolean) => css`
    ${buttonIcon}

    margin-inline-start: ${isButtonBlock ? '.25' : '.5'}rem;
`;

export const buttonLoading = css`
    color: transparent;

    :after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        border: 4px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: button-loading-spinner 1s ease infinite;
    }

    @keyframes button-loading-spinner {
        from {
            transform: rotate(0turn);
        }

        to {
            transform: rotate(1turn);
        }
    }
`;
