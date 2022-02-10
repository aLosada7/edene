import { badge } from './styles';

export type IBadgeColor = 'gray' | 'teal' | 'pink';
export type IBadgeVariant = 'default' | 'primary';

export interface BadgeProps {
    text: string;
    color?: IBadgeColor;
    cssOverrides?: any;
    variant?: string;
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
