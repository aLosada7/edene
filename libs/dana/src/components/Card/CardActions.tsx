import { ReactElement } from 'react';

export interface CardActionsProps {
    children?: ReactElement | ReactElement[];
}

export const CardActions = ({ children, ...props }: CardActionsProps) => {
    return <div>{children}</div>;
};
