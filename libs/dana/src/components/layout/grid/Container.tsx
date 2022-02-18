import { Props } from '../../../helpers';
import { ReactElement } from 'react';
import { gridContainer } from './styles';
import { SerializedStyles } from '@emotion/react';

export interface ContainerProps extends Props {
    /** Each unit is multipled by 0.25 rem */
    pv?: number;
    /** Each unit is multipled by 0.25 rem */
    ph?: number;
    /** Each unit is multipled by 0.25 rem */
    mt?: number;
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
