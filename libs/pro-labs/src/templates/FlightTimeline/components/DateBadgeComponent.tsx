import { Badge } from '@edene/components';
import { text, Theme, useTheme } from '@edene/foundations';
import { css } from '@emotion/react';

const badge = (theme: Theme) => css`
    ${text.small({ fontWeight: 'regular' })};

    background-color: ${theme.color};
    color: ${theme.white};
    padding: 0.5rem 2rem;
    border-radius: 1000px;
`;

export const DateBadgeComponent = ({ date }: { date: string }) => {
    const { theme } = useTheme();

    return <Badge css={badge(theme)}>{date}</Badge>;
};
