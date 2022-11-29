import { ReactNode } from 'react';
import { stack } from './styles';

export interface StackProps {
    children: ReactNode;
}

export const Stack = (props: StackProps) => {
    const { children } = props;

    return <div css={stack}>{children}</div>;
};
