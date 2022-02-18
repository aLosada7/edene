import { css } from '@emotion/react';
import { useState, HTMLAttributes } from 'react';
import { visuallyHidden as _visuallyHidden } from '../../foundations/accesibility';
import { Props } from '../../helpers/types';
import { SvgChevronRight } from '../../foundations/icons/chevron-right';
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
    extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>,
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
}: AccordionRowProps) => {
    const [expanded, setExpanded] = useState(false);
    const collapse = () => setExpanded(false);
    const expand = () => setExpanded(true);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        expanded ? collapse() : expand();
        onClick(event);
    }
    return (
        <li css={accordionRow(variant)}>
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
                    <SvgChevronRight />
                </div>
            </button>
            <div css={expanded ? expandedBody : collapsedBody}>
                <div css={expandedBodyChildren} hidden={!expanded}>
                    {children}
                </div>
            </div>
        </li>
    );
};
