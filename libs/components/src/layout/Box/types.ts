import { PolymorphicComponentProps, Props, Scale } from '@edene/foundations';
import { ReactNode } from 'react';

export interface BoxProps extends Props {
    m?: Scale;
    mt?: Scale;
    mr?: Scale;
    mb?: Scale;
    ml?: Scale;
    my?: Scale;
    mx?: Scale;
    p?: Scale;
    pt?: Scale;
    pr?: Scale;
    pb?: Scale;
    pl?: Scale;
    py?: Scale;
    px?: Scale;
    children: ReactNode;
}

export type PBoxProps<C> = PolymorphicComponentProps<C, BoxProps>;
export type BoxComponent = <C = 'div'>(
    props: PBoxProps<C>
) => React.ReactElement;
