import { cloneElement, HTMLAttributes, ReactElement, ReactNode } from 'react';

import {
    EdeneColor,
    useThemeContext,
    FontWeight,
    TextAlign,
    Props,
} from '@edene/foundations';

import { flexText, textCss, textColorCss } from './styles';

export type ITextFontSize =
    | 'xxsm'
    | 'xsm'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xlg'
    | 'xxlg';

export interface TextProps extends HTMLAttributes<HTMLDivElement>, Props {
    mt?: number;
    // in titles only soon
    mb?: number;
    ml?: number;
    size?: ITextFontSize;
    weight?: FontWeight;
    color?: EdeneColor;
    align?: TextAlign;
    icon?: ReactElement;
    children: ReactNode | string;
}

export const Text = ({
    mt = 0,
    mb = 0,
    ml = 0,
    size = 'md',
    weight = 'regular',
    color,
    align = 'inherit',
    icon,
    children,
    cssOverrides,
}: TextProps) => {
    const { theme } = useThemeContext();

    // TODO: take it on account when introducing dark mode support
    const textColor = color || 'inherit';

    return (
        <div
            css={[
                textCss(mt, mb, ml, size, align, weight),
                textColorCss({ theme, color: textColor }),
                icon ? flexText : null,
                cssOverrides,
            ]}
        >
            {icon
                ? cloneElement(icon, { color: icon.props.color || 'inherit' })
                : null}
            {children}
        </div>
    );
};
