import { css } from '@emotion/react';

import { Badge } from '@edene/components';
import { textSans, Theme, useThemeContext } from '@edene/foundations';

const badge = (theme: Theme) => css`
    ${textSans.small({ fontWeight: 'regular' })};

    background-color: ${theme.color};
    color: ${theme.white};
    padding: 0.5rem 2rem;
    border-radius: 1000px;
`;

export const DateBadgeComponent = ({ date }: { date: string }) => {
    const { theme } = useThemeContext();

    return <Badge text={date} cssOverrides={badge(theme)} />;
};
