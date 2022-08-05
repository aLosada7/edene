import { ReactElement } from 'react';

export interface CardActionsProps {
    children?: ReactElement | ReactElement[];
}

export const CardActions = ({ children }: CardActionsProps) => {
    return <div>{children}</div>;
};
