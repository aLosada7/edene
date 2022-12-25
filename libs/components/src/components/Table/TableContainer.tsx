import { ReactElement } from 'react';

import { Props } from '@edene/foundations';

import { tableContainerHeader } from './styles';

export interface TableContainerProps extends Props {
    title: string;
    description: string;
    children: ReactElement | ReactElement[];
}

export const TableContainer = (props: TableContainerProps) => {
    const { title, description, css: cssOverrides, children, ...rest } = props;

    return (
        <div {...rest}>
            <div css={tableContainerHeader}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            {children}
        </div>
    );
};
