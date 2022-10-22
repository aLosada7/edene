import { ReactNode } from 'react';
import { Group } from '../Group';

import { Stack } from '../Stack';
import { listItem, listItemActions } from './styles';

export interface ListItemProps {
    borderBottom?: boolean;
    actions?: ReactNode;
    direction?: 'row' | 'column';
    children: ReactNode;
}

export const ListItem = (props: ListItemProps) => {
    const {
        borderBottom = false,
        actions,
        children,
        direction,
        ...rest
    } = props;

    const Element = direction === 'row' ? Group : Stack;

    return (
        <li css={listItem(borderBottom)} {...rest}>
            <div>
                <Element>{children}</Element>
                {actions && <div css={listItemActions}>{actions}</div>}
            </div>
        </li>
    );
};
