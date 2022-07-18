import { cloneElement, ReactElement } from 'react';
import { flexText, text, textColorCss } from './styles';
import useThemeContext from '../../foundations/theme/useThemeContext';
import { EdeneColor } from '@edene/foundations';
import { FontWeight } from '../../foundations/typography/types';

export type ITextFontSize =
    | 'xxsm'
    | 'xsm'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xlg'
    | 'xxlg'
    | 'xxxlg';

export type ITextAlign = 'inherit' | 'left' | 'center' | 'right';
export interface TextProps {
    mt?: number;
    // in titles only soon
    mb?: number;
    size?: ITextFontSize;
    weight?: FontWeight;
    color?: EdeneColor;
    align?: ITextAlign;
    icon?: ReactElement;
    cssOverrides?: any;
    children: ReactElement | string;
}

export const Text = ({
    mt = 0,
    mb = 0,
    size = 'md',
    weight,
    color,
    align = 'inherit',
    icon,
    children,
    cssOverrides,
}: TextProps) => {
    const { theme } = useThemeContext();

    const textColor = color || 'inherit';

    return (
        <div
            css={[
                text(mt, mb, size, align, weight),
                textColorCss({ theme, color: textColor }),
                icon ? flexText : null,
                cssOverrides,
            ]}
        >
            {icon ? cloneElement(icon, { color: 'inherit' }) : null}
            {children}
        </div>
    );
};
