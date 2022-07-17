import { Props } from '../helpers';
import { DanaColor } from '../colors/types';
import { IconSize } from '../sizes';

export type IconVariant = 'filled' | 'outlined';

export interface IconProps extends Props {
    size?: IconSize;
    color?: DanaColor;
    /** For the new material icons */
    children?: string;
    /** For the new material icons */
    variant?: IconVariant;
}
