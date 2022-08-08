import { css } from '@emotion/react';

import {
    getColor,
    getDarkenColor,
    disabled,
    buttonSize,
    defaultTheme,
    Theme,
    ThemeOptions,
    ButtonSize,
    ButtonVariant,
} from '@edene/foundations';

import { IButtonBlock } from './Button';

export const btnGroup = (size?: ButtonSize | IButtonBlock) => css`
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
    width: auto;
    line-height: 1.2;
    font-size: ${buttonSize[size].font};
    padding: 8px calc(${buttonSize[size].padding} * 0.25rem);

    &[disabled] {
        ${disabled}
    }
`;

export const btnColor = (
    { theme = defaultTheme, color }: ThemeOptions,
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
    theme: Theme,
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

    ${variant === 'outline' &&
    `
    background-color: transparent;
    color: ${color};
    fill: ${color};
    border-color: ${color};

    :hover {
        background-color: ${theme.white};
        color: ${hoverColor};
        fill: ${hoverColor};
        border-color: ${hoverColor};
    }
    `}

    ${variant === 'link' &&
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
