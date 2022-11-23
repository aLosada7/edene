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
    variant?: IconVariant;

    mr?: number;

    ml?: number;

    /** For the new material icons */
    children?: string;
}

export const Icon = (props: IconProps) => {
    const { theme } = useThemeContext();

    const {
        children,
        color = theme.black,
        variant = 'filled',
        cssOverrides,
        size = 'medium',
        ml = 0,
        mr = 0,
    } = props;

    return (
        <span
            className={`material-icons${
                variant === 'outlined' ? '-outlined' : ''
            }`}
            css={[
                icon(size, ml, mr),
                iconTheme({ theme, color }),
                cssOverrides,
            ]}
        >
            {children}
        </span>
    );
};
