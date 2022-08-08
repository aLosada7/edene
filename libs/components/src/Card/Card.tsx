import React from 'react';

import { Props } from '@edene/foundations';

import { card } from './styles';

export interface CardProps extends Props {
    /**
     * The destination url if we want the card to be acting as a link
     */
    href?: string;
    role?: string;
    /** Called when close button clicked and when escape key is pressed */
    onClick?(): void;
    children?: React.ReactElement | React.ReactElement[];
}

export const Card = React.forwardRef(
    (
        { href, role, onClick, children, cssOverrides }: CardProps,
        ref: React.LegacyRef<HTMLElement> | undefined
    ) => {
        if (href)
            return (
                <a href={href} css={[card, cssOverrides]}>
                    {children}
                </a>
            );

        return (
            <section
                role={role}
                css={[card, cssOverrides]}
                onClick={onClick}
                ref={ref}
            >
                {children}
            </section>
        );
    }
);
