import { Icon } from './Icon';
import type { IconProps } from './types';

export const ArrowRightIcon = ({ size, color }: IconProps) => (
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
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
        </svg>
    </Icon>
);
