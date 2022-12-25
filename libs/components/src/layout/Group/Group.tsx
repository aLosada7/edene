import { ReactNode } from 'react';
import { group } from './styles';

export interface GroupProps {
    gap?: number;
    children: ReactNode;
}

export const Group = (props: GroupProps) => {
    const { gap = 1, children } = props;

    return <div css={group(gap)}>{children}</div>;
};
