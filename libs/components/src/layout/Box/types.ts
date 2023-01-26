import { PolymorphicComponentProps, Props } from '@edene/foundations';
import { ReactNode } from 'react';

export interface BoxProps extends Props {
    mt?: number;
    mr?: number;
    mb?: number;
    ml?: number;
    mv?: number;
    mh?: number;
    children: ReactNode;
}

export type PBoxProps<C> = PolymorphicComponentProps<C, BoxProps>;
export type BoxComponent = <C = 'img'>(
    props: PBoxProps<C>
) => React.ReactElement;
