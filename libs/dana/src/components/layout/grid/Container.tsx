import { Props } from '../../../helpers';
import { ReactElement } from 'react';
import { gridContainer } from './styles';

export interface ContainerProps extends Props {
    /** Each unit is multipled by 0.25 rem */
    pv?: number;
    /** Each unit is multipled by 0.25 rem */
    mt?: number;
    children?: ReactElement | ReactElement[];
}

export const Container = ({ pv = 4, mt = 0, children }: ContainerProps) => {
    return <div css={gridContainer(mt, pv)}>{children}</div>;
};
