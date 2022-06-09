import { cloneElement, forwardRef } from 'react';

import { PolymorphicComponentProps, PolymorphicRef } from '@dana-theme';

import { IButtonSize } from '../../foundations/size';
import { btn, btnColor, buttonIconLeft, buttonIconRight } from './styles';
import useThemeContext from '../../foundations/theme/useThemeContext';
import { DanaColor } from 'libs/dana/src/foundations/colors/types';
import { Props } from '../../helpers';

export type IButtonVariant = 'filled' | 'outline' | 'link';
export type IButtonBlock = 'block';

export interface SharedButtonProps extends Props {
    id?: string;
    /** Button type attribute */
    type?: 'submit' | 'button' | 'reset';
    color?: DanaColor;
    variant?: IButtonVariant;
    size?: IButtonSize | IButtonBlock;
    leftIcon?: JSX.Element;
    rightIcon?: JSX.Element;
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
            color = 'primary',
            variant = 'filled',
            size = 'medium',
            leftIcon,
            rightIcon,
            disabled,
            children,
            cssOverrides,
            ...rest
        } = props;

        const theme = useThemeContext();

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
                    btnColor(theme, color, variant, isButtonBlock),
                    cssOverrides,
                ]}
                ref={ref}
                disabled={disabled}
                {...rest}
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
                    : cloneElement(children as JSX.Element, {
                          color: 'inherit',
                      })}
                {rightIcon ? (
                    <span css={buttonIconRight}>
                        {cloneElement(rightIcon, {
                            size: 'small',
                            color: 'inherit',
                        })}
                    </span>
                ) : null}
            </Element>
        );
    }
) as any;
