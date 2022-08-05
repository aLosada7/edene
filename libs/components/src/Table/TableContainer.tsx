import { ReactElement } from 'react';

import { Props } from '@edene/foundations';

import { tableContainerHeader } from './styles';

export interface TableContainerProps extends Props {
    title: string;
    description: string;
    children: ReactElement | ReactElement[];
}

export const TableContainer = ({
    title,
    description,
    cssOverrides,
    children,
    ...props
}: TableContainerProps) => {
    return (
        <div {...props}>
            <div css={tableContainerHeader}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            {children}
        </div>
    );
};
