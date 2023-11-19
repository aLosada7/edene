import { ReactNode } from 'react';
import { PolymorphicComponentProps, Props, Scale } from '@edene/foundations';

export interface BoxProps extends Props {
    m?: Scale;
    mx?: Scale;
    my?: Scale;
    ml?: Scale;
    mr?: Scale;
    mt?: Scale;
    mb?: Scale;
    p?: Scale;
    px?: Scale;
    py?: Scale;
    pl?: Scale;
    pr?: Scale;
    pt?: Scale;
    pb?: Scale;
    width?: string;
    children: ReactNode;
}

export type PBoxProps<C> = PolymorphicComponentProps<C, BoxProps>;
export type BoxComponent = <C = 'div'>(
    props: PBoxProps<C>
) => React.ReactElement;
