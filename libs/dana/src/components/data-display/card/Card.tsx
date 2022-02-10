import { SerializedStyles } from '@emotion/react';
import React, { ReactElement } from 'react';

import { card } from './styles';

export interface CardProps {
    /**
     * The destination url if we want the card to be acting as a link
     */
    href?: string;
    children?: ReactElement | ReactElement[];
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export function Card({ href, children, cssOverrides, ...props }: CardProps) {
    if (href)
        return (
            <a href={href} css={[card, cssOverrides]}>
                {children}
            </a>
        );

    return <div css={[card, cssOverrides]}>{children}</div>;
}

export default Card;
