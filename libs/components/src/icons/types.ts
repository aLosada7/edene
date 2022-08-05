import { Props, EdeneColor, IconSize } from '@edene/foundations';

export type IconVariant = 'filled' | 'outlined';

export interface IconProps extends Props {
    size?: IconSize;
    color?: EdeneColor;
    /** For the new material icons */
    children?: string;
    /** For the new material icons */
    variant?: IconVariant;
}
