import { ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';
import { Props } from '@edene/foundations';

import { Heading } from '../../typography/Heading';
import { cardHeader } from './styles';
import { Box } from '../../layout/Box';

export interface CardHeaderProps extends Props {
    children: ReactNode;
}

export const CardHeader = ({ children, css, ...rest }: CardHeaderProps) => (
    <Box py={2}>
        <Heading
            size="h3"
            css={[cardHeader, css] as SerializedStyles[]}
            {...rest}
        >
            {children}
        </Heading>
    </Box>
);
