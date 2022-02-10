import { cloneElement, ReactElement } from 'react';
import { flexText, text, textColor } from './styles';
import { Color, PaletteColor } from '../../foundations/palette';
import useThemeContext from '../../foundations/theme/useThemeContext';

export type IFontWeight = 'medium';
export type IFontSize = 'sm' | 'md' | 'lg' | 'h3';
export type ITextAlign = 'inherit' | 'left' | 'center' | 'right';
export interface TextProps {
    mt?: number;
    weight?: IFontWeight;
    size?: IFontSize;
    color?: Color | PaletteColor;
    align?: ITextAlign;
    icon?: ReactElement;
    cssOverrides?: any;
    children: ReactElement | string;
}

export const Text = ({
    mt = 0,
    weight = 'medium',
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
