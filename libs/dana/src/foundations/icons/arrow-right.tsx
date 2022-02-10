import { iconSize } from '../size';
import { isFirstCharacterALetter } from '../utils/is-first-character-a-letter';
import type { IconProps } from './types';

export const SvgArrowRight = ({ size, color }: IconProps) => (
    <svg
        viewBox="0 0 24 24"
        focusable="false"
        width={
            size && isFirstCharacterALetter(size) ? iconSize[size] : `${size}px`
        }
        fill={color}
    >
        <path
            fill="currentColor"
            d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
        ></path>
    </svg>
);
