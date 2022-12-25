import { cloneElement, HTMLAttributes, ReactElement, ReactNode } from 'react';

import {
    EdeneColor,
    useTheme,
    FontWeight,
    TextAlign,
    Props,
} from '@edene/foundations';

import { flexText, textCss, textColorCss } from './styles';

export type ITextFontSize = 'xxsmall' | 'xsmall' | 'small' | 'regular';

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

export const Text = (props: TextProps) => {
    const {
        mt = 0,
        mb = 0,
        ml = 0,
        size = 'regular',
        weight = 'regular',
        color,
        align = 'inherit',
        icon,
        children,
        css: cssOverrides,
        ...rest
    } = props;
    const { theme } = useTheme();

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
            {...rest}
        >
            {icon
                ? cloneElement(icon, { color: icon.props.color || 'inherit' })
                : null}
            {children}
        </div>
    );
};
