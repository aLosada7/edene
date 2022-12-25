import { ReactNode } from 'react';

import { useTheme, EdeneColor, Props } from '@edene/foundations';

import { badge, badgeTheme } from './styles';

export type IBadgeVariant = 'filled' | 'outlined';

export interface BadgeProps extends Props {
    color?: EdeneColor;
    children: ReactNode;
}

export const Badge = (props: BadgeProps) => {
    const {
        children,
        color,
        css: cssOverrides,
        ...rest
    } = {
        ...props,
    };

    const { theme } = useTheme();

    return (
        <span
            css={[badge, badgeTheme({ theme, color }), cssOverrides]}
            {...rest}
        >
            {children}
        </span>
    );
};
