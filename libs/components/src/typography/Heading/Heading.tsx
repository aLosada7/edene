import { ReactElement } from 'react';

import {
    FontWeight,
    TextAlign,
    Props,
    useTheme,
    Color,
} from '@edene/foundations';

import { flexText, headingCss, headingColor } from './styles';

export type IFontSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends Color, Props {
    size?: IFontSize;
    weight?: FontWeight;
    align?: TextAlign;
    icon?: ReactElement;
    children: ReactElement | React.ReactNode | string;
}

export const Heading = ({
    size: Element = 'h1',
    weight = 'regular',
    color,
    align = 'inherit',
    icon,
    children,
    css,
    ...props
}: HeadingProps) => {
    const { theme } = useTheme();

    return (
        <Element
            css={[
                headingCss(Element, weight, align),
                headingColor(theme.heading.color, color),
                icon ? flexText : null,
                css,
            ]}
            {...props}
        >
            {icon}
            {children}
        </Element>
    );
};
