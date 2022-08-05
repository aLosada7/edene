import { css } from '@emotion/react';

import { IconSize, iconSize } from '@edene/foundations';
import { IconProps } from './types';

const materialIcon = (size: IconSize) => css`
    font-size: ${iconSize[size]};
`;

export const Icon = ({
    children,
    variant = 'filled',
    cssOverrides,
    size = 'medium',
}: IconProps) => {
    return (
        <span
            className={`material-icons${
                variant === 'outlined' ? '-outlined' : ''
            }`}
            css={[materialIcon(size), cssOverrides]}
        >
            {children}
        </span>
    );
};
