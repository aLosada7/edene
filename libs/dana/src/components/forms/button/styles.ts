import { css } from '@emotion/react';
import { disabled } from '../../../foundations/accesibility';
import { colorsPalette } from '../../../foundations';
import { buttonSize, IButtonSize } from '../../../foundations/size';
import { IButtonVariant } from './Button';
import { defaultTheme } from '../../../foundations/theme/defaultTheme';

export const btnGroup = css`
    display: inline-flex;
    width: 100%;

    *:not(:first-of-type) {
        margin-inline-start: 0.5rem;
    }
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
    color: string,
    variant: IButtonVariant,
    isButtonBlock: boolean
) => css`
    ${color === 'primary' && buttonColorStyles(theme.palette.primary, variant)}

    ${color === 'secondary' &&
    buttonColorStyles(theme.palette.secondary, variant)}

    ${color === 'accent' && buttonColorStyles(theme.palette.accent, variant)}

    ${color !== 'primary' &&
    color !== 'default' &&
    color !== 'accent' &&
    buttonColorStyles((colorsPalette as any)[color], variant)};

    ${isButtonBlock && `width: 100%;`}
`;

const buttonColorStyles = (colorScheme: any, variant: IButtonVariant) => css`
    background-color: ${colorScheme.background};
    border: 1px solid ${colorScheme.background};
    color: ${colorScheme.color};
    fill: ${colorScheme.color};
    :hover {
        background-color: ${colorScheme.hover};
    }

    ${variant === 'outline' &&
    `
    background-color: #fff;
    color: ${colorScheme.background};
    fill: ${colorScheme.background};
    border-color: ${colorScheme.background};
    :hover {
        color: #fff;
        fill: #fff;
        background-color: ${colorScheme.background}
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
