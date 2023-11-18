import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { TypographyProps } from '../types';

export type TextType = 'xxsmall' | 'xsmall' | 'small' | 'regular';

export interface TextProps extends TypographyProps, Props {
    type: TextType;
    children: ReactNode;
}
