import { css } from '@emotion/react';

import { Badge } from '@edene/components';
import { text, Theme, useThemeContext } from '@edene/foundations';

const badge = (theme: Theme) => css`
    ${text.small({ fontWeight: 'regular' })};

    background-color: ${theme.color};
    color: ${theme.white};
    padding: 0.5rem 2rem;
    border-radius: 1000px;
`;

export const DateBadgeComponent = ({ date }: { date: string }) => {
    const { theme } = useThemeContext();

    return <Badge cssOverrides={badge(theme)}>{date}</Badge>;
};
