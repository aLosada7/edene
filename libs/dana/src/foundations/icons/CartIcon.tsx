import { Icon } from './Icon';
import type { IconProps } from './types';

export const CartIcon = ({ size, color }: IconProps) => (
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
            <path d="M21.193 8.712a2.984 2.984 0 0 0-2.986-2.726h-.952v-.751a5.255 5.255 0 0 0-10.51 0v.75h-.951a2.983 2.983 0 0 0-2.986 2.727L1.715 20.73A2.999 2.999 0 0 0 4.7 24h.005l14.599-.027a2.998 2.998 0 0 0 2.98-3.27L21.193 8.712zM8.246 5.235a3.754 3.754 0 0 1 7.508 0v.75H8.246v-.75zm11.056 17.238-14.599.025h-.002a1.496 1.496 0 0 1-1.49-1.631l1.093-12.02a1.488 1.488 0 0 1 1.49-1.36h.95V9.74a.75.75 0 0 0 1.502 0V7.487h7.508V9.74c0 .415.336.75.75.75h.002a.75.75 0 0 0 .75-.75V7.487h.951a1.49 1.49 0 0 1 1.49 1.361l1.092 11.993a1.496 1.496 0 0 1-1.488 1.632z"></path>
        </svg>
    </Icon>
);
