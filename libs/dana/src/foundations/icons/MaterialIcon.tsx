import { Icon } from './Icon';
import { IconProps } from './types';

export const MaterialIcon = ({
    size,
    color,
    children,
    variant = 'filled',
}: IconProps) => (
    <Icon size={size} color={color}>
        <span
            className={`material-icons${
                variant === 'outlined' ? '-outlined' : ''
            }`}
        >
            {children}
        </span>
    </Icon>
);
