import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { TypographyProps } from '../types';

export type TextSize = 'xxsmall' | 'xsmall' | 'small' | 'regular';

export interface TextProps extends TypographyProps, Props {
    size?: TextSize;
    children: ReactNode;
}
