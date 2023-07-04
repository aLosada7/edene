import {
    EdeneColor,
    IconSize,
    IconVariant,
    PolymorphicComponentProps,
    Props,
} from '@edene/foundations';
import { ReactNode, ReactElement } from 'react';

export type ButtonVariant = 'filled' | 'outlined' | 'text';
export type ButtonSize = 'xsmall' | 'small' | 'medium' | 'large';
export type ButtonBlock = 'block';

export interface ButtonProps extends Props {
    id?: string;
    /** Button type attribute */
    type?: 'submit' | 'button' | 'reset';
    color?: EdeneColor;
    variant?: ButtonVariant;
    size?: ButtonSize | ButtonBlock;

    icon?: string;
    iconSide?: 'left' | 'right';
    iconVariant?: IconVariant;
    loading?: boolean;

    iconSize?: IconSize;
    disabled?: boolean;
    children?: ReactNode;
}

export type PButtonProps<C> = PolymorphicComponentProps<C, ButtonProps>;

export type ButtonComponent = <C = 'button'>(
    props: PButtonProps<C>
) => ReactElement;

export interface ButtonGroupProps extends Props {
    size?: ButtonSize | ButtonBlock;
    variant?: ButtonVariant;
    children: ReactNode;
}
