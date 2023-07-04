import { Color, FontWeight, Props, TextAlign } from '@edene/foundations';
import { ReactElement } from 'react';

export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends Color, Props {
    size?: HeadingSize;
    weight?: FontWeight;
    align?: TextAlign;
    icon?: ReactElement;
    children: ReactElement | React.ReactNode | string;
}
