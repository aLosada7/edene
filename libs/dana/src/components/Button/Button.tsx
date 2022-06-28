import { cloneElement, forwardRef } from 'react';

import { PolymorphicComponentProps, PolymorphicRef } from '@dana-theme';

import { IButtonSize } from '../../foundations/size';
import { btn, btnColor, buttonIconLeft, buttonIconRight } from './styles';
import useThemeContext from '../../foundations/theme/useThemeContext';
import { DanaColor } from 'libs/dana/src/foundations/colors/types';
import { Props } from '../../helpers';
import { MaterialIcon } from '../../foundations/icons/MaterialIcon';

export type IButtonVariant = 'filled' | 'outline' | 'link';
export type IButtonBlock = 'block';

export interface SharedButtonProps extends Props {
    id?: string;
    /** Button type attribute */
    type?: 'submit' | 'button' | 'reset';
    color?: DanaColor;
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
                        theme,
                        isButtonBlock ? 'medium' : (size as IButtonSize)
                    ),
                    btnColor(theme, variant, isButtonBlock, color),
                    cssOverrides,
                ]}
                ref={ref}
                disabled={disabled}
                {...rest}
            >
                {leftIcon ? (
                    <MaterialIcon size="small" cssOverrides={buttonIconLeft}>
                        {leftIcon}
                    </MaterialIcon>
                ) : null}
                {typeof children === 'string'
                    ? children
                    : cloneElement(children as JSX.Element, {
                          color: 'inherit',
                      })}
                {rightIcon ? (
                    <MaterialIcon size="small" cssOverrides={buttonIconRight}>
                        {rightIcon}
                    </MaterialIcon>
                ) : null}
            </Element>
        );
    }
) as any;
