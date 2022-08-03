import { css } from '@emotion/react';
import { colorsPalette, defaultTheme } from '@edene/foundations';

export const alert = css`
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
`;

export const alertColor = ({ theme = defaultTheme }, color: string) => css`
    ${alertColorStyles((colorsPalette as any)[color])}
`;

const alertColorStyles = (colorScheme: any) => css`
    background-color: ${colorScheme.light};
    color: ${colorScheme.background};
`;
