import { ReactNode } from 'react';

import {
    useThemeContext,
    Props,
    ComponentColors,
    IconVariant,
} from '@edene/foundations';

import { tag, tagTheme, tagIcon, tagIconTheme } from './styles';
import { Icon } from '../icons';

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
        cssOverrides,
        ...rest
    } = {
        ...props,
    };

    const { theme } = useThemeContext();

    return (
        <span
            css={[tag, tagTheme({ theme, color: type }), cssOverrides]}
            {...rest}
        >
            {icon && (
                <Icon
                    variant={iconVariant}
                    cssOverrides={[
                        tagIcon,
                        tagIconTheme({ theme, color: type }),
                    ]}
                >
                    {icon}
                </Icon>
            )}
            {children}
        </span>
    );
};
