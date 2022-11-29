import { SerializedStyles } from '@emotion/react';
import { ReactElement } from 'react';

import { Heading } from '../../typography/Heading';
import { cardHeader } from './styles';

export interface CardHeaderProps {
    children: ReactElement | string;
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const CardHeader = ({ children, ...props }: CardHeaderProps) => {
    return (
        <Heading cssOverrides={cardHeader} {...props}>
            {children}
        </Heading>
    );
};
