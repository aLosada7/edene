import { iconSize } from '../size';
import { isFirstCharacterALetter } from '../utils/is-first-character-a-letter';
import { IconProps } from './types';

export const SvgPlus = ({ size, color }: IconProps) => (
    <svg
        viewBox="-7 -7 45 45"
        xmlns="http://www.w3.org/2000/svg"
        width={
            size && isFirstCharacterALetter(size) ? iconSize[size] : `${size}px`
        }
        fill={color}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.8 16.2l.425 9.8h1.525l.45-9.8 9.8-.45v-1.525l-9.8-.425-.45-9.8h-1.525l-.425 9.8-9.8.425v1.525l9.8.45z"
        />
    </svg>
);
