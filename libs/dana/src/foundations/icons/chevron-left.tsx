import { iconSize } from '../size';
import type { IconProps } from './types';

export const SvgChevronLeft = ({ size }: IconProps) => {
    return (
        <svg
            viewBox="-7 -7 45 45"
            xmlns="http://www.w3.org/2000/svg"
            width={size ? iconSize[size] : undefined}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.4 4L8 14.4V15.45L18.4 25.8499L19.375 24.8999L11.05 14.925L19.375 4.95L18.4 4Z"
            />
        </svg>
    );
};
