import { cloneElement, forwardRef } from 'react';

import {
    PolymorphicComponentProps,
    PolymorphicRef,
    EdeneColor,
    useThemeContext,
    Props,
} from '@edene/foundations';

import { Icon } from '../icons';
import { btn, btnColor, buttonIconLeft, buttonIconRight } from './styles';

export type IButtonSize = 'xsmall' | 'small' | 'medium' | 'large';
export type IButtonVariant = 'filled' | 'outline' | 'link';
export type IButtonBlock = 'block';

export interface SharedButtonProps extends Props {
    id?: string;
    /** Button type attribute */
    type?: 'submit' | 'button' | 'reset';
    color?: EdeneColor;
    variant?: IButtonVariant;
    size?: IButtonSize | IButtonBlock;
    leftIcon?: string;
    rightIcon?: string;
    disabled?: boolean;
    children?: JSX.Element | string;
}

export type ButtonProps<C> = PolymorphicComponentProps<C, SharedButtonProps>;

type ButtonComponent = <C = 'button'>(
    props: ButtonProps<C>
) => React.ReactElement;

export const Button: ButtonComponent = forwardRef(
    (props: ButtonProps<'button'>, ref: PolymorphicRef<'button'>) => {
        const {
            component,
            type,
            color,
            variant = 'filled',
            size = 'medium',
            leftIcon,
            rightIcon,
            disabled,
            children,
            cssOverrides,
            ...rest
        } = props;

        const { theme } = useThemeContext();

        const isButtonBlock = size === 'block';
        const Element = component || 'button';

        return (
            <Element
                type={type}
                id={props.id}
                css={[
                    btn(
                        isButtonBlock ? 'medium' : (size as IButtonSize)
                    ),
                    btnColor({ theme, color }, variant, isButtonBlock),
                    cssOverrides,
                ]}
                ref={ref}
                disabled={disabled}
                {...rest}
            >
                {leftIcon ? (
                    <Icon size="small" cssOverrides={buttonIconLeft}>
                        {leftIcon}
                    </Icon>
                ) : null}
                {typeof children === 'string'
                    ? children
                    : cloneElement(children as JSX.Element, {
                          color: 'inherit',
                      })}
                {rightIcon ? (
                    <Icon size="small" cssOverrides={buttonIconRight}>
                        {rightIcon}
                    </Icon>
                ) : null}
            </Element>
        );
    }
) as any;
