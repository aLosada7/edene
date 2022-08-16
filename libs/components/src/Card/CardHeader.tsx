import { SerializedStyles } from '@emotion/react';
import { ReactElement } from 'react';

import { Title } from '../Title';
import { cardHeader } from './styles';

export interface CardHeaderProps {
    children: ReactElement | string;
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const CardHeader = ({ children, ...props }: CardHeaderProps) => {
    return (
        <Title cssOverrides={cardHeader} {...props}>
            {children}
        </Title>
    );
};
