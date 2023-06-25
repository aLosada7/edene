import { ReactNode } from 'react';
import { Props } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { stack } from './styles';
import { Box } from '../Box';

export interface StackProps extends Props {
    gap?: number;
    children: ReactNode;
}

export const Stack = ({ gap = 1, children, css, ...props }: StackProps) => {
    return (
        <Box css={[stack(gap), css] as SerializedStyles[]} {...props}>
            {children}
        </Box>
    );
};
