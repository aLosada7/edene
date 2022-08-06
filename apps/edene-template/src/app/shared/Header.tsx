import { css } from '@emotion/react';

import { Title } from '@edene/components';

export interface HeaderProps {
    title: string;
}

const header = css`
    padding: 1.5rem;
    background-color: #fff;
`;

export const Header = ({ title }: HeaderProps) => {
    return (
        <header css={header}>
            <Title size="h4">{title}</Title>
        </header>
    );
};
