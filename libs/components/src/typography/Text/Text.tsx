import { cloneElement, HTMLAttributes, ReactElement, ReactNode } from 'react';

import {
    useTheme,
    FontWeight,
    TextAlign,
    Props,
    Color,
} from '@edene/foundations';

import { flexText, textCss, textTheme } from './styles';

export type ITextFontSize = 'xxsmall' | 'xsmall' | 'small' | 'regular';

export interface TextProps
    extends HTMLAttributes<HTMLDivElement>,
        Color,
        Props {
    mt?: number;
    // in titles only soon
    mb?: number;
    ml?: number;
    size?: ITextFontSize;
    weight?: FontWeight;
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
        align = 'inherit',
        icon,
        color,
        children,
        css,
        ...rest
    } = props;
    const { theme } = useTheme();

    return (
        <div
            css={[
                textCss(mt, mb, ml, size, align, weight),
                textTheme({ theme, color }),
                icon ? flexText : null,
                css,
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
