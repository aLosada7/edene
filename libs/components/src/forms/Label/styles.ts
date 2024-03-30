import { defaultTheme, text, Theme } from '@edene/foundations';
import { css } from '@emotion/react';

export const label = css`
    display: inline-block;
`;

export const labelText = ({ theme = defaultTheme }: { theme: Theme }) => css`
    ${text.small({ fontWeight: 'regular', lineHeight: 'loose' })};
    color: ${theme.label.text};
`;

export const supportingText = ({
    theme = defaultTheme,
}: {
    theme: Theme;
}) => css`
    ${text.small({ lineHeight: 'regular' })};
    color: ${theme.label.supportingText};
    margin: 2px 0 0;
`;
