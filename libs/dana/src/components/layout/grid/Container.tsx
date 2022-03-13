import { Props } from '../../../helpers';
import { ReactElement } from 'react';
import { gridContainer } from './styles';
import { SerializedStyles } from '@emotion/react';

export type DanaScale =
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
    pv?: DanaScale;
    /** Each unit is multipled by 0.25 rem */
    ph?: DanaScale;
    /** Each unit is multipled by 0.25 rem */
    mt?: DanaScale;
    children?: ReactElement | ReactElement[];
    cssOverrides?: SerializedStyles | SerializedStyles[];
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
