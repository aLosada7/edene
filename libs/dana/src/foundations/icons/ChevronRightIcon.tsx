import { Icon } from './Icon';
import type { IconProps } from './types';

export const ChevronRightIcon = ({ size, color }: IconProps) => (
    <Icon size={size} color={color}>
        <svg
            width="inherit"
            fill="inherit"
            focusable="false"
            viewBox="-2 -2 20 20"
            aria-labelledby="chevron-right"
            role="img"
            aria-hidden="false"
        >
            <path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path>
        </svg>
    </Icon>
);
