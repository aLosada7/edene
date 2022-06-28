import { css } from '@emotion/react';

import { iconSize } from '../size';
import { IconProps, IconSize } from './types';

const materialIcon = (size: IconSize) => css`
    font-size: ${iconSize[size]};
`;

export const MaterialIcon = ({
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
