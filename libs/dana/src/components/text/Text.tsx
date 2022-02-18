import { cloneElement, ReactElement } from 'react';
import { flexText, text, textColor } from './styles';
import { Color, PaletteColor } from '../../foundations/palette';
import useThemeContext from '../../foundations/theme/useThemeContext';

export type IFontSize = 'xxsm' | 'sm' | 'md' | 'lg' | 'h3' | 'h4' | 'h5';
export type ITextAlign = 'inherit' | 'left' | 'center' | 'right';
export interface TextProps {
    mt?: number;
    weight?: number;
    size?: IFontSize;
    color?: Color | PaletteColor;
    align?: ITextAlign;
    icon?: ReactElement;
    cssOverrides?: any;
    children: ReactElement | string;
}

export const Text = ({
    mt = 0,
    weight = 0,
    size = 'lg',
    color = 'primary',
    align = 'inherit',
    icon,
    children,
    cssOverrides,
    ...props
}: TextProps) => {
    const theme = useThemeContext();

    return (
        <div
            css={[
                text(mt, weight, size, align),
                textColor(theme, color),
                icon ? flexText : null,
                cssOverrides,
            ]}
        >
            {icon ? icon : null}
            {children}
        </div>
    );
};
