import { css } from '@emotion/react';
import { disabled } from '../../../foundations/accesibility';
import { colorsPalette } from '../../../foundations';
import { buttonSize, IButtonSize } from '../../../foundations/size';
import { IButtonVariant } from './Button';
import { defaultTheme } from '../../../foundations/theme/defaultTheme';

export const btnGroup = css`
    display: inline-flex;

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
    ${color === 'primary' && buttonColorStyles(theme.primary, variant)}

    ${color === 'default' && buttonColorStyles(theme.default, variant)}

    ${color !== 'primary' &&
    color !== 'default' &&
    buttonColorStyles((colorsPalette as any)[color].primary, variant)};

    ${isButtonBlock && `width: 100%;`}
`;

const buttonColorStyles = (kind: any, variant: string) => css`
    background-color: ${kind.background};
    border: 1px solid ${kind.color};
    color: ${kind.color};
    :hover {
        background-color: ${kind.hover};
    }

    ${variant === 'outline' &&
    `background-color: white; color: ${kind.color}; :hover { background-color: transparent;}`}
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
`;
