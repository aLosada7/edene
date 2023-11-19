import { ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { gridContainer } from './styles';

export interface ContainerProps extends Props {
    children?: ReactNode;
}

export const Container = ({ children, css, ...props }: ContainerProps) => {
    return (
        <div css={[gridContainer, css]} {...props}>
            {children}
        </div>
    );
};
