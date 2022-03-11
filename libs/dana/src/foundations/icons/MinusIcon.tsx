import { Icon } from './Icon';
import type { IconProps } from './types';

export const MinusIcon = ({ size, color }: IconProps) => (
    <Icon size={size} color={color}>
        <svg
            width="inherit"
            fill="inherit"
            focusable="false"
            viewBox="-7 -7 45 45"
            aria-labelledby="minus"
            role="img"
            aria-hidden="false"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 14v2.5h22V14H4z"
            />
        </svg>
    </Icon>
);
