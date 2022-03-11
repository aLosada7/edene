import { SerializedStyles } from '@emotion/react';
import React, { ReactElement } from 'react';

import { card } from './styles';

export interface CardProps {
    /**
     * The destination url if we want the card to be acting as a link
     */
    href?: string;
    /** Called when close button clicked and when escape key is pressed */
    onClick?(): void;
    children?: ReactElement | ReactElement[];
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export function Card({
    href,
    onClick,
    children,
    cssOverrides,
    ...props
}: CardProps) {
    if (href)
        return (
            <a href={href} css={[card, cssOverrides]}>
                {children}
            </a>
        );

    return (
        <section css={[card, cssOverrides]} onClick={onClick}>
            {children}
        </section>
    );
}

export default Card;
