import { css } from '@emotion/react';

import { Heading } from '@edene/components';
import { FC } from 'react';

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
