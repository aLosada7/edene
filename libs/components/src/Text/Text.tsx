import { cloneElement, HTMLAttributes, ReactElement, ReactNode } from 'react';

import {
    EdeneColor,
    useThemeContext,
    FontWeight,
    Props,
} from '@edene/foundations';

import { flexText, text, textColorCss } from './styles';

export type ITextFontSize =
    | 'xxsm'
    | 'xsm'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xlg'
    | 'xxlg';

export type ITextAlign = 'inherit' | 'left' | 'center' | 'right';

export interface TextProps extends HTMLAttributes<HTMLDivElement>, Props {
    mt?: number;
    // in titles only soon
    mb?: number;
    ml?: number;
    size?: ITextFontSize;
    weight?: FontWeight;
    color?: EdeneColor;
    align?: ITextAlign;
    icon?: ReactElement;
    children: ReactNode | string;
}

export const Text = ({
    mt = 0,
    mb = 0,
    ml = 0,
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
                text(mt, mb, ml, size, align, weight),
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
