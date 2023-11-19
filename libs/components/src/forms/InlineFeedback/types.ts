import type { HTMLAttributes, ReactNode } from 'react';
import { Props } from '@edene/foundations';

export interface InlineFeedbackProps
    extends Props,
        HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
}
