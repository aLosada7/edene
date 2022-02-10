import { ReactElement } from 'react';
import { cardBody } from './styles';

export interface CardBodyProps {
    children?: ReactElement | ReactElement[];
}

export const CardBody = ({ children, ...props }: CardBodyProps) => {
    return <div css={cardBody}>{children}</div>;
};
