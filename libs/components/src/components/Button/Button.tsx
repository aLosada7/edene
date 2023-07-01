import { ReactNode, cloneElement, forwardRef } from 'react';

import {
    PolymorphicComponentProps,
    PolymorphicRef,
    EdeneColor,
    useTheme,
    Props,
    ButtonVariant,
    ButtonSize,
    IconSize,
    IconVariant,
} from '@edene/foundations';

import { Icon } from '../../icons';
import {
    btn,
    btnColor,
    buttonIconLeft,
    buttonIconRight,
    buttonLoading,
} from './styles';
import { Box } from '../../layout/Box';

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
    children?: ReactNode;
}

export type PButtonProps<C> = PolymorphicComponentProps<C, ButtonProps>;

type ButtonComponent = <C = 'button'>(
    props: PButtonProps<C>
) => React.ReactElement;

export const Button: ButtonComponent = forwardRef(
    (props: PButtonProps<'button'>, ref: PolymorphicRef<'button'>) => {
        const {
            as: Component = 'button',
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
            css,
            ...rest
        } = props;

        const { theme } = useTheme();

        const isButtonBlock = size === 'block';

        return (
            <Component
                type={type}
                id={props.id}
                css={[
                    btn(isButtonBlock ? 'medium' : (size as ButtonSize)),
                    btnColor({ theme, color }, variant, isButtonBlock),
                    css,
                ]}
                ref={ref}
                disabled={disabled}
                {...rest}
            >
                {icon && iconSide === 'left' ? (
                    <Box mr={2}>
                        <Icon
                            variant={iconVariant}
                            size={iconSize}
                            css={buttonIconLeft(isButtonBlock)}
                            color="inherit"
                        >
                            {icon}
                        </Icon>
                    </Box>
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
                        css={buttonIconRight(isButtonBlock)}
                        color="inherit"
                    >
                        {icon}
                    </Icon>
                ) : null}
            </Component>
        );
    }
) as any;
