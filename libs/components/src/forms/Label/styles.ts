import { text,Theme } from '@edene/foundations';
import { css } from '@emotion/react';

export const label = css`
    display: inline-block;
`;

export const labelText = ({ theme }: { theme: Theme }) => css`
    ${text.small({ fontWeight: 'regular', lineHeight: 'loose' })};
    color: ${theme.label.text};
`;

export const optionalText = ({ theme }: { theme: Theme }) => css`
    ${text.small({ lineHeight: 'regular' })};
    color: ${theme.label.optionalText};
    font-style: italic;
`;

export const supportingText = ({ theme }: { theme: Theme }) => css`
    ${text.small({ lineHeight: 'regular' })};
    color: ${theme.label.supportingText};
    margin: 2px 0 0;
`;
