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
import { SerializedStyles } from '@emotion/react';

export type IButtonBlock = 'block';

export interface ButtonProps extends Props {
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
    cssOverridesIconRightButton?: SerializedStyles | SerializedStyles[];
    children?: JSX.Element | string;
}

export type PButtonProps<C> = PolymorphicComponentProps<C, ButtonProps>;

type ButtonComponent = <C = 'button'>(
    props: PButtonProps<C>
) => React.ReactElement;

export const Button: ButtonComponent = forwardRef(
    (props: PButtonProps<'button'>, ref: PolymorphicRef<'button'>) => {
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
            cssOverridesIconRightButton,
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
                        cssOverrides={
                            (buttonIconRight(isButtonBlock),
                            cssOverridesIconRightButton)
                        }
                        color="inherit"
                    >
                        {iconRight}
                    </Icon>
                ) : null}
            </Element>
        );
    }
) as any;
