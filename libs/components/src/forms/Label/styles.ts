import { css } from '@emotion/react';

import { defaultTheme, text } from '@edene/foundations';

export const label = css`
    display: inline-block;
    margin-bottom: 0.5rem;
`;

export const labelText = ({ theme = defaultTheme }) => css`
    ${text.small({ fontWeight: 'regular', lineHeight: 'loose' })};
    color: ${theme.label.text};
`;

export const optionalText = ({ theme = defaultTheme }) => css`
    ${text.small({ lineHeight: 'regular' })};
    color: ${theme.label.optionalText};
    font-style: italic;
`;

export const supportingText = ({ theme = defaultTheme }) => css`
    ${text.small({ lineHeight: 'regular' })};
    color: ${theme.label.supportingText};
    margin: 2px 0 0;
`;
