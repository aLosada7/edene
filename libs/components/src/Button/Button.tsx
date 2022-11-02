import { cloneElement, forwardRef } from 'react';
import { SerializedStyles } from '@emotion/react';

import {
    PolymorphicComponentProps,
    PolymorphicRef,
    EdeneColor,
    useThemeContext,
    Props,
    ButtonVariant,
    ButtonSize,
    IconSize,
    IconVariant,
} from '@edene/foundations';

import { Icon } from '../icons';
import {
    btn,
    btnColor,
    buttonIconLeft,
    buttonIconRight,
    buttonLoading,
} from './styles';

export type IButtonBlock = 'block';

export interface ButtonProps extends Props {
    id?: string;
    /** Button type attribute */
    type?: 'submit' | 'button' | 'reset';
    color?: EdeneColor;
    variant?: ButtonVariant;
    size?: ButtonSize | IButtonBlock;

    icon?: string;
    iconSide?: 'left' | 'right';
    iconVariant?: IconVariant;
    loading?: boolean;

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
            icon,
            iconSide = 'left',
            iconVariant = 'filled',
            loading,
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
                {icon && iconSide === 'left' ? (
                    <Icon
                        variant={iconVariant}
                        size={iconSize}
                        cssOverrides={buttonIconLeft(isButtonBlock)}
                        color="inherit"
                    >
                        {icon}
                    </Icon>
                ) : null}
                {typeof children === 'string' ? (
                    loading ? (
                        <div css={buttonLoading}>{children}</div>
                    ) : (
                        children
                    )
                ) : (
                    cloneElement(children as JSX.Element, {
                        color: 'inherit',
                    })
                )}
                {icon && iconSide === 'right' ? (
                    <Icon
                        variant={iconVariant}
                        size={iconSize}
                        cssOverrides={
                            [
                                buttonIconRight(isButtonBlock),
                                cssOverridesIconRightButton,
                            ] as SerializedStyles[]
                        }
                        color="inherit"
                    >
                        {icon}
                    </Icon>
                ) : null}
            </Element>
        );
    }
) as any;
