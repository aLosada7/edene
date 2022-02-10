import { Children, cloneElement, ReactElement, ReactNode } from 'react';
import { Props } from '../../../helpers';

import { accordion } from './styles';

export interface AccordionProps extends Props {
    children: ReactElement[];
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
    ...props
}: AccordionProps) => {
    return (
        <ul css={accordion(variant)}>
            {Children.map(children, (child) => {
                return cloneElement(child, { hideToggleLabel, variant });
            })}
        </ul>
    );
};
