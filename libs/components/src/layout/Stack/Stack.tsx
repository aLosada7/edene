import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { stack } from './styles';

export interface StackProps extends Props {
    gap?: number;
    children: ReactNode;
}

export const Stack = (props: StackProps) => {
    const { gap = 1, children, cssOverrides } = props;

    return <div css={[stack(gap), cssOverrides]}>{children}</div>;
};
