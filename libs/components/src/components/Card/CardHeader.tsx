import { ReactNode } from 'react';
import { Props } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { Box } from '../../layout/Box';
import { Heading } from '../../typography/Heading';
import { cardHeader } from './styles';

export interface CardHeaderProps extends Props {
    children: ReactNode;
}

export const CardHeader = ({ children, css, ...rest }: CardHeaderProps) => (
    <Box py={2}>
        <Heading
            type="h3"
            css={[cardHeader, css] as SerializedStyles[]}
            {...rest}
        >
            {children}
        </Heading>
    </Box>
);
