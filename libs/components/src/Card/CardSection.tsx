import { ReactElement } from 'react';

import { Props } from '@edene/foundations';

import { cardSection } from './styles';

export interface CardSectionProps extends Props {
    borderBottom?: boolean;
    children?: ReactElement | ReactElement[];
}

export const CardSection = ({
    borderBottom,
    children,
    cssOverrides,
}: CardSectionProps) => {
    return (
        <section css={[cardSection(borderBottom), cssOverrides]}>
            {children}
        </section>
    );
};
