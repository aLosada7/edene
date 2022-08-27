import { cloneElement, ReactElement, ReactNode } from 'react';

import { EdeneColor, Props, useThemeContext } from '@edene/foundations';

import { flexText, title, textColorCss } from './styles';
import { Stack } from '../Stack';

export type IFontSize = 'h3' | 'h4' | 'h5';
export type ITextAlign = 'inherit' | 'left' | 'center' | 'right';

export interface TitleProps extends Props {
    mt?: number;
    // in titles only soon
    mb?: number;
    size?: IFontSize;
    color?: EdeneColor;
    align?: ITextAlign;
    icon?: ReactElement;
    actions?: ReactNode;
    children: ReactElement | React.ReactNode | string;
}

export const Title = ({
    mt = 0,
    mb = 0,
    size = 'h5',
    color,
    align = 'inherit',
    icon,
    actions,
    children,
    cssOverrides,
}: TitleProps) => {
    const { theme } = useThemeContext();

    const textColor = color || 'inherit';
    const Element = size || 'div';

    return (
        <Element
            css={[
                title(mt, mb, size, align, !!actions),
                textColorCss({ theme, color: textColor }),
                icon ? flexText : null,
                cssOverrides,
            ]}
        >
            {icon ? cloneElement(icon, { color: 'inherit' }) : null}
            {children}
            {actions && <Stack>{actions}</Stack>}
        </Element>
    );
};
