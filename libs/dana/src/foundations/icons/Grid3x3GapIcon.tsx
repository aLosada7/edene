import { Icon } from './Icon';
import type { IconProps } from './types';

export const Grid3x3GapIcon = ({ size, color }: IconProps) => (
    <Icon size={size} color={color}>
        <svg
            width="inherit"
            fill="inherit"
            focusable="false"
            viewBox="0 0 32 32"
            aria-labelledby="cesta"
            role="img"
            aria-hidden="false"
        >
            <path d="M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z"></path>
        </svg>
    </Icon>
);
