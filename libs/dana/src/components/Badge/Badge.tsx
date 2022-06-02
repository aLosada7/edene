import { SerializedStyles } from '@emotion/react';
import { badge } from './styles';

export type IBadgeColor = 'gray' | 'teal' | 'pink';
export type IBadgeVariant = 'default' | 'primary';

export interface BadgeProps {
    text: string;
    color?: IBadgeColor;
    variant?: string;
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const Badge = ({
    text,
    color = 'teal',
    variant = 'default',
    cssOverrides,
    ...props
}: BadgeProps) => {
    return <span css={[badge(color, variant), cssOverrides]}>{text}</span>;
};
