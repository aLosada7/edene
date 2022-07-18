import { Props } from '../../helpers';
import { EdeneColor } from '../colors/types';

export type IconSize = 'xsmall' | 'small' | 'medium' | 'large' | 'big';
export type IconVariant = 'filled' | 'outlined';

export interface IconProps extends Props {
    size?: IconSize;
    color?: EdeneColor;
    /** For the new material icons */
    children?: string;
    /** For the new material icons */
    variant?: IconVariant;
}
