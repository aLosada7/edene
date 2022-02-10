import { iconSize } from '../size';
import type { IconProps } from './types';

export const SvgChevronRight = ({ size }: IconProps) => {
    return (
        <svg
            viewBox="-2 -2 20 20"
            xmlns="http://www.w3.org/2000/svg"
            width={size ? iconSize[size] : undefined}
            aria-hidden="true"
        >
            <path d="M11 8L6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"></path>
        </svg>
    );
};
