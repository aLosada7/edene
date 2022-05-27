import type { HTMLAttributes, ReactNode } from 'react';
import { Props } from '../../helpers/types';

export interface InlineFeedbackProps
    extends Props,
        HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
}
