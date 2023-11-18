import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { TypographyProps } from '../types';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends TypographyProps, Props {
    type: HeadingType;
    children: ReactNode;
}
