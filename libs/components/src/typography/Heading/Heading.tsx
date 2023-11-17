import { useTheme } from '@edene/foundations';

import { headingCss, headingTheme } from './styles';
import { HeadingProps } from './types';
import { FC } from 'react';

export const Heading: FC<HeadingProps> = ({
    size: Element = 'h1',
    weight = 'regular',
    textAlign = 'inherit',
    color,
    children,
    css,
}) => {
    const { theme } = useTheme();

    return (
        <Element
            css={[
                headingCss(Element, weight, textAlign),
                headingTheme({ theme, color }),
                css,
            ]}
        >
            {children}
        </Element>
    );
};
