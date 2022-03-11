import { Icon } from './Icon';
import type { IconProps } from './types';

export const ChevronLeftIcon = ({ size, color }: IconProps) => (
    <Icon size={size} color={color}>
        <svg
            width="inherit"
            fill="inherit"
            focusable="false"
            viewBox="-7 -7 45 45"
            aria-labelledby="cesta"
            role="img"
            aria-hidden="false"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.4 4L8 14.4V15.45L18.4 25.8499L19.375 24.8999L11.05 14.925L19.375 4.95L18.4 4Z"
            />{' '}
        </svg>
    </Icon>
);
