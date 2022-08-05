import { css } from '@emotion/react';
import { useState, HTMLAttributes } from 'react';

import { visuallyHidden as _visuallyHidden, Props } from '@edene/foundations';

import { Icon } from '../icons';
import {
    accordionRow,
    button,
    chevronIconDown,
    chevronIconUp,
    collapsedBody,
    expandedBody,
    expandedBodyChildren,
    labelText,
    toggle,
    toggleIconWithLabel,
    toggleLabel,
} from './styles';

const visuallyHidden = css`
    ${_visuallyHidden}
`;

export interface AccordionRowProps
    extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'>,
        Props {
    /**
     * A line of text to summarise the information that lies within the expanded state.
     * Appears in the collapsed state, as well as prominently at the top of the expanded state.
     */
    label: string;
    /**
     * A callback function called when the component is opened or closed.
     * Receives the click event as an argument.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * @ignore passed down by the parent <Accordion />
     */
    hideToggleLabel?: boolean;
    /**
     * The accordion style to use. Passed down by the parent <Accordion />
     */
    variant?: 'borderless' | 'bordered';
}

export const AccordionRow = ({
    children,
    label,
    hideToggleLabel = false,
    variant = 'borderless',
    onClick = () => undefined,
    cssOverrides,
    ...props
}: AccordionRowProps) => {
    const [expanded, setExpanded] = useState(false);
    const collapse = () => setExpanded(false);
    const expand = () => setExpanded(true);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        expanded ? collapse() : expand();
        onClick(event);
    }

    return (
        <li css={[accordionRow(variant), cssOverrides]} {...props}>
            <button
                type="button"
                aria-expanded={expanded}
                onClick={handleClick}
                css={() => [
                    button(),
                    expanded ? chevronIconUp : chevronIconDown,
                    !hideToggleLabel ? toggleIconWithLabel : '',
                ]}
            >
                <strong css={labelText}>{label}</strong>
                <div css={toggle}>
                    {hideToggleLabel ? (
                        <span css={visuallyHidden}>
                            {expanded ? 'Hide' : 'Show more'}
                        </span>
                    ) : (
                        <span css={toggleLabel}>
                            {expanded ? (
                                'Hide'
                            ) : (
                                <span>
                                    Show
                                    <span css={visuallyHidden}> more</span>
                                </span>
                            )}
                        </span>
                    )}
                    <Icon>expand_more</Icon>
                </div>
            </button>
            <div css={expanded ? expandedBody : collapsedBody}>
                <div css={expandedBodyChildren} aria-hidden={!expanded}>
                    {children}
                </div>
            </div>
        </li>
    );
};
