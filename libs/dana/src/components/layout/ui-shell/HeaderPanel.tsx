import { headerPanel, headerPanelExpanded } from './stylesHeader';
import React from 'react';

export type TooltipAlignment = 'end';

export interface HeaderPanelProps {
    children?: React.ReactElement;
    'aria-label': string;
    expanded?: boolean;
}

export const HeaderPanel = ({
    children = <></>,
    expanded = false,
    ...props
}: HeaderPanelProps) => {
    return (
        <div
            css={[headerPanel, expanded ? headerPanelExpanded : null]}
            aria-label={props['aria-label']}
        >
            {children}
        </div>
    );
};
