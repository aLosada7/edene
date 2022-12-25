import { ReactNode } from 'react';
import { Props } from '@edene/foundations';
import { SerializedStyles } from '@emotion/react';

import { stack } from './styles';
import { Box } from '../Box';

export interface StackProps extends Props {
    gap?: number;
    children: ReactNode;
}

export const Stack = (props: StackProps) => {
    const { gap = 1, children, css: cssOverrides, ...rest } = props;

    return (
        <Box css={[stack(gap), cssOverrides] as SerializedStyles[]} {...rest}>
            {children}
        </Box>
    );
};
