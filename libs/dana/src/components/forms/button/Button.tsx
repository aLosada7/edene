import { IButtonSize } from '../../../foundations/size';
import { ButtonHTMLAttributes, cloneElement } from 'react';
import { btn, btnColor, buttonIconLeft, buttonIconRight } from './styles';
import { SerializedStyles } from '@emotion/react';
import useThemeContext from '../../../foundations/theme/useThemeContext';
import { Color, ComponentColors } from 'libs/dana/src/foundations/colors/types';

export type IButtonVariant = 'filled' | 'outline' | 'link';
export type IButtonBlock = 'block';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    id?: string;
    color?: Color | ComponentColors;
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
    variant = 'filled',
    size = 'medium',
    leftIcon,
    rightIcon,
    disabled,
    children,
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
                        size: 'small',
                        color: 'inherit',
                    })}
                </span>
            ) : null}
            {typeof children === 'string'
                ? children
                : cloneElement(children as JSX.Element, { color: 'inherit' })}
            {rightIcon ? (
                <span css={buttonIconRight}>
                    {cloneElement(rightIcon, {
                        size: 'small',
                        color: 'inherit',
                    })}
                </span>
            ) : null}
        </button>
    );
};

// color como colors
