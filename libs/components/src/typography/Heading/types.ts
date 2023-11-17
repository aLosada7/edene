import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { TypographyProps } from '../types';

export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends TypographyProps, Props {
    size?: HeadingSize;
    children: ReactNode;
}
