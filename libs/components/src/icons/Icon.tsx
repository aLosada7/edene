import {
    IconSize,
    Props,
    EdeneColor,
    IconVariant,
    useThemeContext,
} from '@edene/foundations';

import { icon, iconTheme } from './styles';

export interface IconProps extends Props {
    size?: IconSize;
    color?: EdeneColor;
    /** For the new material icons */
    children?: string;
    /** For the new material icons */
    variant?: IconVariant;
}

export const Icon = (props: IconProps) => {
    const { theme } = useThemeContext();

    const {
        children,
        color = theme.black,
        variant = 'filled',
        cssOverrides,
        size = 'medium',
    } = props;

    return (
        <span
            className={`material-icons${
                variant === 'outlined' ? '-outlined' : ''
            }`}
            css={[icon(size), iconTheme({ theme, color }), cssOverrides]}
        >
            {children}
        </span>
    );
};
