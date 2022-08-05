import { Fragment, ReactElement } from 'react';

import { headerPanel, headerPanelExpanded } from './stylesHeader';

export interface HeaderPanelProps {
    children?: ReactElement | ReactElement[];
    backgroundColor?: string;
    textColor?: string;
    'aria-label': string;
    expanded?: boolean;
}

export const HeaderPanel = ({
    children = <Fragment></Fragment>,
    backgroundColor = '#000',
    textColor = '#c6c6c6',
    expanded = false,
    ...props
}: HeaderPanelProps) => {
    return (
        <div
            css={[
                headerPanel(backgroundColor, textColor),
                expanded ? headerPanelExpanded : null,
            ]}
            aria-label={props['aria-label']}
        >
            {children}
        </div>
    );
};
