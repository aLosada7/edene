import { iconSize } from '../size';
import { IconProps } from './types';

export const SvgMinus = ({ size }: IconProps) => (
    <svg
        viewBox="-7 -7 45 45"
        xmlns="http://www.w3.org/2000/svg"
        width={size ? iconSize[size] : undefined}
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M4 14v2.5h22V14H4z" />
    </svg>
);
