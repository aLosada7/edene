import { ReactNode } from 'react';
import { list } from './styles';

export interface ListProps {
    children: ReactNode;
}

export const List = (props: ListProps) => {
    const { children, ...rest } = props;
    return (
        <ul css={list} {...rest}>
            {children}
        </ul>
    );
};
