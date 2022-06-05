import { ReactElement } from 'react';
import { Props } from '../../helpers';
import { tableToolbarContent } from './styles';

export interface TableToolbarContentProps extends Props {
    children: ReactElement | ReactElement[];
}

export const TableToolbarContent = ({
    cssOverrides,
    children,
    ...props
}: TableToolbarContentProps) => {
    return <div css={[tableToolbarContent, cssOverrides]}>{children}</div>;
};
