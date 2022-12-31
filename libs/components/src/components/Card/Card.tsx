import React from 'react';

import { Props, useTheme } from '@edene/foundations';

import { card, cardTheme } from './styles';

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
        {
            href,
            role,
            onClick,
            children,
            css: cssOverrides,
            ...rest
        }: CardProps,
        ref: React.LegacyRef<HTMLElement> | undefined
    ) => {
        const { theme } = useTheme();

        if (href)
            return (
                <a href={href} css={[card, cssOverrides]}>
                    {children}
                </a>
            );

        return (
            <section
                role={role}
                ref={ref}
                css={[card, cardTheme({ theme }), cssOverrides]}
                onClick={onClick}
                {...rest}
            >
                {children}
            </section>
        );
    }
);
