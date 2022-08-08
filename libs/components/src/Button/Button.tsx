import { cloneElement, forwardRef } from 'react';

import {
    PolymorphicComponentProps,
    PolymorphicRef,
    EdeneColor,
    useThemeContext,
    Props,
    ButtonVariant,
    ButtonSize,
    IconSize,
} from '@edene/foundations';

import { Icon } from '../icons';
import { btn, btnColor, buttonIconLeft, buttonIconRight } from './styles';

export type IButtonBlock = 'block';

export interface SharedButtonProps extends Props {
    id?: string;
    /** Button type attribute */
    type?: 'submit' | 'button' | 'reset';
    color?: EdeneColor;
    variant?: ButtonVariant;
    size?: ButtonSize | IButtonBlock;
    iconLeft?: string;
    iconRight?: string;
    iconSize?: IconSize;
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
            iconSize = 'small',
            variant = 'filled',
            size = 'medium',
            iconLeft,
            iconRight,
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
                    btn(isButtonBlock ? 'medium' : (size as ButtonSize)),
                    btnColor({ theme, color }, variant, isButtonBlock),
                    cssOverrides,
                ]}
                ref={ref}
                disabled={disabled}
                {...rest}
            >
                {iconLeft ? (
                    <Icon
                        size={iconSize}
                        cssOverrides={buttonIconLeft(isButtonBlock)}
                        color="inherit"
                    >
                        {iconLeft}
                    </Icon>
                ) : null}
                {typeof children === 'string'
                    ? children
                    : cloneElement(children as JSX.Element, {
                          color: 'inherit',
                      })}
                {iconRight ? (
                    <Icon
                        size={iconSize}
                        cssOverrides={buttonIconRight(isButtonBlock)}
                        color="inherit"
                    >
                        {iconRight}
                    </Icon>
                ) : null}
            </Element>
        );
    }
) as any;
