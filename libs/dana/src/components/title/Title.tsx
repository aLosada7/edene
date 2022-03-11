import { cloneElement, ReactElement } from 'react';
import { flexText, title, textColorCss } from './styles';
import useThemeContext from '../../foundations/theme/useThemeContext';
import { DanaColor } from '../../foundations/colors/types';

export type IFontSize = 'h3' | 'h4' | 'h5';
export type ITextAlign = 'inherit' | 'left' | 'center' | 'right';
export interface TitleProps {
    mt?: number;
    // in titles only soon
    mb?: number;
    size?: IFontSize;
    color?: DanaColor;
    align?: ITextAlign;
    icon?: ReactElement;
    cssOverrides?: any;
    children: ReactElement | string;
}

export const Title = ({
    mt = 0,
    mb = 0,
    size = 'h5',
    color,
    align = 'inherit',
    icon,
    children,
    cssOverrides,
    ...props
}: TitleProps) => {
    const { theme } = useThemeContext();
    const textColor = color || (theme ? theme.title[size] : 'dark');

    const Element = size || 'div';

    return (
        <Element
            css={[
                title(mt, mb, size, align),
                textColorCss({ theme, color: textColor }),
                icon ? flexText : null,
                cssOverrides,
            ]}
        >
            {icon ? cloneElement(icon, { color: 'inherit' }) : null}
            {children}
        </Element>
    );
};
