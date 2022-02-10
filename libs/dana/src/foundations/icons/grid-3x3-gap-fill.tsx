import { iconSize } from '../size';
import { isFirstCharacterALetter } from '../utils/is-first-character-a-letter';
import type { IconProps } from './types';

export const SvgGrid3x3GapFill = ({ size, color }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-7 -7 45 45"
        width={
            size && isFirstCharacterALetter(size) ? iconSize[size] : `${size}px`
        }
        fill={color}
    >
        <path d="M14 4H18V8H14zM4 4H8V8H4zM24 4H28V8H24zM14 14H18V18H14zM4 14H8V18H4zM24 14H28V18H24zM14 24H18V28H14zM4 24H8V28H4zM24 24H28V28H24z"></path>
    </svg>
);
