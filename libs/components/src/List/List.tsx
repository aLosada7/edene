import { ReactNode } from 'react';
import { list } from './styles';

export type ListStyleType = 'none' | 'disc' | 'disclosure-close';

export interface ListProps {
    styleType?: ListStyleType;
    children: ReactNode;
}

export const List = (props: ListProps) => {
    const { styleType = 'none', children, ...rest } = props;
    return (
        <ul css={list(styleType)} {...rest}>
            {children}
        </ul>
    );
};
