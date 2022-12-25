import { ReactNode, HTMLAttributes } from 'react';
import { Props } from '@edene/foundations';

import { box } from './styles';

export interface BoxProps extends HTMLAttributes<HTMLDivElement>, Props {
    mt?: number;
    mr?: number;
    mb?: number;
    ml?: number;
    mv?: number;
    mh?: number;
    children: ReactNode;
}

export const Box = (props: BoxProps) => {
    const { children, css: cssOverrides, ...rest } = props;

    return (
        <div css={[box(rest), cssOverrides]} {...rest}>
            {children}
        </div>
    );
};
