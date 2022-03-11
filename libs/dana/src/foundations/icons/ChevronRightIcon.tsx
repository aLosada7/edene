import { Icon } from './Icon';
import type { IconProps } from './types';

export const ChevronRightIcon = ({ size, color }: IconProps) => (
    <Icon size={size} color={color}>
        <svg
            width="inherit"
            fill="inherit"
            focusable="false"
            viewBox="0 0 24 24"
            aria-labelledby="cesta"
            role="img"
            aria-hidden="false"
        >
            <path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path>
        </svg>
    </Icon>
);
