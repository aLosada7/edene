import { PropsWithChildren, ReactNode } from 'react';

import { Props } from '@edene/foundations';

import { option } from './styles';

type SelectHandler = (
    event: React.MouseEvent<HTMLLIElement>,
    value: string
) => void;

export interface OptionProps extends Props, PropsWithChildren {
    value: string;
    onClick?: SelectHandler;
    children?: ReactNode;
}

export const Option = ({
    value,
    onClick = () => undefined,
    children,
}: OptionProps) => {
    return (
        <li css={option} onClick={(event) => onClick(event, value)}>
            {children}
        </li>
    );
};
