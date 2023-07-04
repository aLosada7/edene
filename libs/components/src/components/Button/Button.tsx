import { cloneElement, forwardRef } from 'react';
import { PolymorphicRef, useTheme } from '@edene/foundations';

import { Icon } from '../../icons';
import {
    btn,
    btnColor,
    buttonIconLeft,
    buttonIconRight,
    buttonLoading,
} from './styles';
import { Box } from '../../layout/Box';
import { ButtonComponent, PButtonProps } from './types';

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
                    btn(isButtonBlock ? 'medium' : size),
                    btnColor({ theme, color }, variant, isButtonBlock),
                    css,
                ]}
                ref={ref}
                disabled={disabled}
                {...rest}
            >
                {icon && iconSide === 'left' ? (
                    <Box pr={2}>
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
                    <Box pl={2}>
                        <Icon
                            variant={iconVariant}
                            size={iconSize}
                            css={buttonIconRight(isButtonBlock)}
                            color="inherit"
                        >
                            {icon}
                        </Icon>
                    </Box>
                ) : null}
            </Component>
        );
    }
) as any;
