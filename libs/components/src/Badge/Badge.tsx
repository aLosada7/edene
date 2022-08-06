import { SerializedStyles } from '@emotion/react';

import { useThemeContext, EdeneColor } from '@edene/foundations';

import { badge, badgeTheme } from './styles';

export type IBadgeVariant = 'filled' | 'outlined';

export interface BadgeProps {
    text: string;
    color?: EdeneColor;
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const Badge = (props: BadgeProps) => {
    const { text, color, cssOverrides, ...rest } = {
        ...props,
    };

    const { theme } = useThemeContext();

    return (
        <span
            css={[badge, badgeTheme({ theme, color }), cssOverrides]}
            {...rest}
        >
            {text}
        </span>
    );
};
