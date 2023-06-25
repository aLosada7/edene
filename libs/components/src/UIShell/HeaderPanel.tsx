import { ReactNode } from 'react';

import { headerPanel, headerTheme, headerPanelExpanded } from './stylesHeader';
import { Props, useTheme } from '@edene/foundations';

export interface HeaderPanelProps extends Props {
    children?: ReactNode;
    'aria-label': string;
    expanded?: boolean;
}

export const HeaderPanel = ({
    children,
    expanded = false,
    css,
    ...props
}: HeaderPanelProps) => {
    const { theme } = useTheme();

    return (
        <div
            css={[
                headerPanel,
                headerTheme(theme),
                expanded ? headerPanelExpanded : null,
                css,
            ]}
            {...props}
        >
            {children}
        </div>
    );
};
