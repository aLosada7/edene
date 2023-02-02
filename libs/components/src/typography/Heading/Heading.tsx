import { cloneElement, ReactElement } from 'react';

import {
    FontWeight,
    TextAlign,
    Props,
    useTheme,
    HeadingTheme,
} from '@edene/foundations';

import { flexText, headingCss, headingColor } from './styles';

export type IFontSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends HeadingTheme, Props {
    mt?: number;
    // in titles only soon
    mb?: number;
    size?: IFontSize;
    weight?: FontWeight;
    align?: TextAlign;
    icon?: ReactElement;
    children: ReactElement | React.ReactNode | string;
}

export const Heading = (props: HeadingProps) => {
    const {
        mt = 0,
        mb = 0,
        size: Element = 'h1',
        weight = 'regular',
        color,
        align = 'inherit',
        icon,
        children,
        css: cssOverrides,
        ...rest
    } = props;
    const { theme } = useTheme();

    return (
        <Element
            css={[
                headingCss(mt, mb, Element, weight, align),
                headingColor(theme?.heading?.color, color),
                icon ? flexText : null,
                cssOverrides,
            ]}
            {...rest}
        >
            {icon ? cloneElement(icon) : null}
            {children}
        </Element>
    );
};
