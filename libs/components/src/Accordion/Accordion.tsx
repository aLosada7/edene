import { Children, cloneElement, ReactElement } from 'react';
import { Props } from '@edene/foundations';

import { accordion } from './styles';

export interface AccordionProps extends Props {
    /**
     * If toggle label has to be shown (only in desktop).
     */
    hideToggleLabel?: boolean;

    /**
     * The accordion style to use.
     */
    variant?: 'borderless' | 'bordered';

    children: ReactElement | ReactElement[];
}

export const Accordion = (props: AccordionProps) => {
    const {
        children,
        hideToggleLabel = false,
        variant = 'borderless',
        cssOverrides,
        ...rest
    } = props;
    return (
        <ul css={[accordion(variant), cssOverrides]} {...rest}>
            {Children.map(children, (child) => {
                return cloneElement(child, { hideToggleLabel, variant });
            })}
        </ul>
    );
};
