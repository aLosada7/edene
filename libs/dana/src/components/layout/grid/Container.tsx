import { Props } from '../../../helpers';
import { ReactElement } from 'react';
import { gridContainer } from './styles';

export interface ContainerProps extends Props {
    noPadding?: boolean;
    /** Each unit is multipled by 0.25 rem */
    mt?: number;
    children?: ReactElement | ReactElement[];
}

export const Container = ({
    noPadding = false,
    mt = 0,
    children,
    ...props
}: ContainerProps) => {
    return <div css={gridContainer(mt, noPadding)}>{children}</div>;
};
