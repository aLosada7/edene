import { cloneElement, ReactElement } from 'react';

import {
    EdeneColor,
    FontWeight,
    TextAlign,
    Props,
    useTheme,
} from '@edene/foundations';

import { flexText, headingCss, headingColorCss } from './styles';

export type IFontSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends Props {
    mt?: number;
    // in titles only soon
    mb?: number;
    size?: IFontSize;
    weight?: FontWeight;
    color?: EdeneColor;
    align?: TextAlign;
    icon?: ReactElement;
    children: ReactElement | React.ReactNode | string;
}

export const Heading = ({
    mt = 0,
    mb = 0,
    size = 'h1',
    weight = 'regular',
    color,
    align = 'inherit',
    icon,
    children,
    cssOverrides,
}: HeadingProps) => {
    const { theme } = useTheme();

    const textColor = color || 'inherit';
    const Element = size || 'div';

    return (
        <Element
            css={[
                headingCss(mt, mb, size, weight, align),
                headingColorCss({ theme, color: textColor }),
                icon ? flexText : null,
                cssOverrides,
            ]}
        >
            {icon ? cloneElement(icon) : null}
            {children}
        </Element>
    );
};
