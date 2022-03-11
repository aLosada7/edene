import { Icon } from './Icon';
import type { IconProps } from './types';

export const ChevronDownIcon = ({ size, color }: IconProps) => (
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
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 9.95L14.45 20.4H15.45L25.8999 9.95L24.9249 9L14.95 17.4L4.975 9L4 9.95Z"
            />{' '}
        </svg>
    </Icon>
);
