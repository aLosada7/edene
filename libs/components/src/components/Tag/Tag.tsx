import { ReactNode } from 'react';
import {
    ComponentColors,
    IconVariant,
    Props,
    useTheme,
} from '@edene/foundations';

import { Icon } from '../../icons';
import { tag, tagIcon, tagIconTheme,tagTheme } from './styles';

export interface TagProps extends Props {
    type?: 'brand' | ComponentColors;

    icon?: string;

    iconVariant?: IconVariant;

    children: ReactNode;
}

export const Tag = (props: TagProps) => {
    const {
        type = 'brand',
        icon,
        iconVariant = 'filled',
        children,
        css,
        ...rest
    } = {
        ...props,
    };

    const { theme } = useTheme();

    return (
        <span css={[tag, tagTheme({ theme, color: type }), css]} {...rest}>
            {icon && (
                <Icon
                    variant={iconVariant}
                    css={[tagIcon, tagIconTheme({ theme, color: type })]}
                >
                    {icon}
                </Icon>
            )}
            {children}
        </span>
    );
};
