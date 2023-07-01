import { ReactNode } from 'react';

import { Props } from '@edene/foundations';

import { cardSection } from './styles';

export interface CardSectionProps extends Props {
    borderRight?: boolean;
    borderBottom?: boolean;
    flex?: number;
    children?: ReactNode;
}

export const CardSection = (props: CardSectionProps) => {
    const {
        borderRight = false,
        borderBottom = false,
        flex = 100,
        children,
        css,
        ...rest
    } = props;

    return (
        <section
            css={[cardSection(flex, borderBottom, borderRight), css]}
            {...rest}
        >
            {children}
        </section>
    );
};
