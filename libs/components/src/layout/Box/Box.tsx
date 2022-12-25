import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { box } from './styles';

export interface BoxProps extends Props {
    mt?: number;
    children: ReactNode;
}

export const Box = (props: BoxProps) => {
    const { mt = 0, children, cssOverrides } = props;
    return <div css={[box(mt), cssOverrides]}>{children}</div>;
};
