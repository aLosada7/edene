import { css } from '@emotion/react';
import { defaultTheme } from '../../foundations/theme/defaultTheme';

import { textSans } from '../../foundations/typography/api';

export const label = css`
    margin-bottom: 0.5rem;
    margin-right: 0.75rem;
`;

export const labelText = ({ theme = defaultTheme }) => css`
    ${textSans.small({ fontWeight: 'medium', lineHeight: 'loose' })};
    color: ${theme.label.text};
`;

export const optionalText = ({ theme = defaultTheme }) => css`
    ${textSans.small({ lineHeight: 'regular' })};
    color: ${theme.label.optionalText};
    font-style: italic;
`;

export const supportingText = ({ theme = defaultTheme }) => css`
    ${textSans.small({ lineHeight: 'regular' })};
    color: ${theme.label.supportingText};
    margin: 2px 0 0;
`;
