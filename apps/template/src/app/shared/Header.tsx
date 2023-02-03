import { css } from '@emotion/react';

import { Heading } from '@edene/components';

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
            <Heading size="h4">{title}</Heading>
        </header>
    );
};
