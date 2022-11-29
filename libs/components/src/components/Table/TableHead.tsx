import { ReactElement } from 'react';
import { thead } from './styles';

export interface TableHeadProps {
    children?: ReactElement | ReactElement[];
}

export const TableHead = ({ children }: TableHeadProps) => {
    return <thead css={thead}>{children}</thead>;
};
