import { css } from '@emotion/react';
import { disabled } from '../../foundations/accesibility';
import {
    colorsPalette,
    DanaColor,
    getColor,
    getHoverColor,
} from '../../foundations';
import { buttonSize, IButtonSize } from '../../foundations/size';
import { IButtonBlock, IButtonVariant } from './Button';
import { defaultTheme } from '../../foundations/theme/defaultTheme';
import { Theme } from '../../foundations/theme/types';

export const btnGroup = (size?: IButtonSize | IButtonBlock) => css`
    display: inline-flex;

    *:not(:first-of-type) {
        margin-inline-start: 0.5rem;
    }

    ${size === 'block' && `width: 100%;`}
`;

export const btn = ({ theme = defaultTheme }, size: IButtonSize) => css`
    font-weight: 400;
    letter-spacing: 0.16px;
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
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
    padding: 0 calc(${buttonSize[size].padding} * 0.25rem);

    &[disabled] {
        ${disabled}
    }
`;

export const btnColor = (
    { theme = defaultTheme },
    variant: IButtonVariant,
    isButtonBlock: boolean,
    color?: DanaColor
) => css`
    ${buttonColorStyles(
        theme,
        getColor({ theme, color }),
        getHoverColor({ theme, color }),
        variant
    )};

    ${isButtonBlock && `width: 100%;`}
`;

const buttonColorStyles = (
    theme: Theme,
    color: string,
    hoverColor: string,
    variant: IButtonVariant
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
    background-color: ${theme.white};
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

export const buttonIconLeft = css`
    ${buttonIcon}

    margin-inline-end: 0.5rem;
`;

export const buttonIconRight = css`
    ${buttonIcon}

    margin-inline-start: 0.5rem;
    margin-inline-end: 0;

    * {
        margin: 0;
    }
`;
