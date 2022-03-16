import { Text } from '@dana-components';
import { css } from '@emotion/react';
import useThemeContext from 'libs/dana/src/foundations/theme/useThemeContext';

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
