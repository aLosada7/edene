import { FC } from 'react';
import { Heading } from '@edene/components';
import { css } from '@emotion/react';

export interface HeaderProps {
    title: string;
}

const header = css`
    padding: 1.5rem;
    background-color: #fff;
`;

export const Header: FC<HeaderProps> = ({ title }) => {
    return (
        <header css={header}>
            <Heading type="h4">{title}</Heading>
        </header>
    );
};
