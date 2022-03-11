import { Icon } from './Icon';
import type { IconProps } from './types';

export const PlusIcon = ({ size, color }: IconProps) => (
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
                d="M13.8 16.2l.425 9.8h1.525l.45-9.8 9.8-.45v-1.525l-9.8-.425-.45-9.8h-1.525l-.425 9.8-9.8.425v1.525l9.8.45z"
            />
        </svg>
    </Icon>
);
