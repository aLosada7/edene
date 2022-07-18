import { Children, cloneElement, ReactElement } from 'react';
import { Props } from '@edene/foundations';

import { accordion } from './styles';

export interface AccordionProps extends Props {
    children: ReactElement | ReactElement[];
    /**
     * If toggle label has to be shown (only in desktop).
     */
    hideToggleLabel?: boolean;
    /**
     * The accordion style to use.
     */
    variant?: 'borderless' | 'bordered';
}

export const Accordion = ({
    children,
    hideToggleLabel = false,
    variant = 'borderless',
    cssOverrides,
    ...props
}: AccordionProps) => (
    <ul css={[accordion(variant), cssOverrides]} {...props}>
        {Children.map(children, (child) => {
            return cloneElement(child, { hideToggleLabel, variant });
        })}
    </ul>
);
