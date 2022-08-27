import { ReactNode } from 'react';
import { stack } from './styles';

export type StackDirection = 'row' | 'column';

export interface StackProps {
    direction?: StackDirection;
    children: ReactNode;
}

export const Stack = (props: StackProps) => {
    const { direction = 'row', children } = props;

    return <div css={stack(direction)}>{children}</div>;
};
