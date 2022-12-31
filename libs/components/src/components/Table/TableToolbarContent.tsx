import { ReactElement } from 'react';
import { Props } from '@edene/foundations';

import { tableToolbarContent } from './styles';
import { SerializedStyles } from '@emotion/react';
import { Box } from '../../layout/Box';

export interface TableToolbarContentProps extends Props {
    children: ReactElement | ReactElement[];
}

export const TableToolbarContent = (props: TableToolbarContentProps) => {
    const { css: cssOverrides, children, ...rest } = props;

    return (
        <Box
            css={[tableToolbarContent, cssOverrides] as SerializedStyles[]}
            {...rest}
        >
            {children}
        </Box>
    );
};
