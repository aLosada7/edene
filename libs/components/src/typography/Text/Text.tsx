import { FC } from 'react';
import { useTheme } from '@edene/foundations';

import { textCss, textTheme } from './styles';
import { TextProps } from './types';

export const Text: FC<TextProps> = ({
    size = 'regular',
    weight = 'regular',
    textAlign = 'inherit',
    color,
    children,
    css,
}) => {
    const { theme } = useTheme();

    return (
        <div
            css={[
                textCss(size, textAlign, weight),
                textTheme({ theme, color }),
                css,
            ]}
        >
            {children}
        </div>
    );
};
