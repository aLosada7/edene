import { DanaColor } from '../colors/types';

export type IconSize = 'xsmall' | 'small' | 'medium' | 'large' | 'big';
export interface IconProps {
    size?: IconSize;
    color?: DanaColor;
}
