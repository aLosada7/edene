import { IButtonSize } from '../../../foundations/size';
import { ButtonHTMLAttributes, cloneElement } from 'react';
import { btn, btnColor, buttonIconLeft, buttonIconRight } from './styles';
import { Color, PaletteColor } from '../../../foundations/palette';
import { SerializedStyles } from '@emotion/react';
import useThemeContext from '../../../foundations/theme/useThemeContext';

export type IButtonVariant = 'basic' | 'outline';
export type IButtonBlock = 'block';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    id?: string;
    color?: Color | PaletteColor;
    variant?: IButtonVariant;
    size?: IButtonSize | IButtonBlock;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
    disabled?: boolean;
    cssOverrides?: SerializedStyles | SerializedStyles[];
    children?: JSX.Element | string;
}

export const Button = ({
    color = 'primary',
    variant = 'basic',
    size = 'medium',
    leftIcon,
    rightIcon,
    disabled,
    cssOverrides,
    ...props
}: ButtonProps) => {
    const theme = useThemeContext();

    const isButtonBlock = size === 'block';

    return (
        <button
            type="button"
            id={props.id}
            css={[
                btn(theme, isButtonBlock ? 'medium' : (size as IButtonSize)),
                btnColor(theme, color, variant, isButtonBlock),
                cssOverrides,
            ]}
            disabled={disabled}
            {...props}
        >
            {leftIcon ? (
                <span css={buttonIconLeft}>
                    {cloneElement(leftIcon, {
                        size,
                    })}
                </span>
            ) : null}
            {props.children}
            {rightIcon ? (
                <span css={buttonIconRight}>
                    {cloneElement(rightIcon, { size })}
                </span>
            ) : null}
        </button>
    );
};

// color como colors
