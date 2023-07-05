import { useTheme } from '@edene/foundations';

import { flexText, headingCss, headingTheme } from './styles';
import { HeadingProps } from './types';

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
                headingTheme({ theme, color }),
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
