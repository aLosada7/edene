import { ReactNode } from 'react';
import { group } from './styles';

export interface GroupProps {
    children: ReactNode;
}

export const Group = (props: GroupProps) => {
    const { children } = props;

    return <div css={group}>{children}</div>;
};
