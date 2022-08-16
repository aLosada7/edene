import { ReactNode } from 'react';

import { Props } from '@edene/foundations';

import { cardSection } from './styles';

export interface CardSectionProps extends Props {
    borderRight?: boolean;
    borderBottom?: boolean;
    flex?: number;
    children?: ReactNode;
}

export const CardSection = ({
    borderRight = false,
    borderBottom = false,
    flex = 100,
    children,
    cssOverrides,
}: CardSectionProps) => {
    return (
        <section
            css={[cardSection(flex, borderBottom, borderRight), cssOverrides]}
        >
            {children}
        </section>
    );
};
