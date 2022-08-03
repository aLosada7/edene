import { css } from '@emotion/react';

import { Text } from '@edene/components';
import { useThemeContext } from '@edene/foundations';

export interface HeaderProps {
    title: string;
}

const header = css`
    padding: 1.5rem;
    background-color: #fff;
`;

export const Header = ({ title }: HeaderProps) => {
    const { theme } = useThemeContext();

    return (
        <header css={header}>
            <Text size="sm">{title}</Text>
        </header>
    );
};
