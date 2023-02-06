import { ReactNode } from 'react';

export type ListStyleType = 'none' | 'disc' | 'disclosure-close';

export interface ListProps {
    styleType?: ListStyleType;
    withSeparation?: boolean;
    children: ReactNode;
}

export interface ListItemProps {
    /** @deprecated */
    borderBottom?: boolean;
    /** @deprecated */
    actions?: ReactNode;
    /** @deprecated */
    direction?: 'row' | 'column';
    children: ReactNode;
}
