import { ReactElement } from 'react';

import { Props } from '@edene/foundations';

import { gridContainer } from './styles';

export type EdeneScale =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 6
    | 8
    | 10
    | 12
    | 24
    | 32
    | 48
    | 64
    | 128
    | 160
    | 192;

export interface ContainerProps extends Props {
    /** Each unit is multipled by 0.25 rem */
    pv?: EdeneScale;
    /** Each unit is multipled by 0.25 rem */
    ph?: EdeneScale;
    /** Each unit is multipled by 0.25 rem */
    mt?: EdeneScale;
    children?: ReactElement | ReactElement[];
}

export const Container = ({
    pv = 0,
    ph = 0,
    mt = 0,
    children,
    cssOverrides,
}: ContainerProps) => {
    return (
        <div css={[gridContainer(mt, pv, ph), cssOverrides]}>{children}</div>
    );
};
