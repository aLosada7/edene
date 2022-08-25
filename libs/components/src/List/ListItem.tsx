import { ReactNode } from 'react';

import { Stack } from '../Stack';
import { StackDirection } from '../Stack/Stack';
import { listItem, listItemActions } from './styles';

export interface ListItemProps {
    borderBottom?: boolean;
    actions?: ReactNode;
    direction?: StackDirection;
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

    return (
        <li css={listItem(borderBottom)} {...rest}>
            <div>
                <Stack direction={direction}>{children}</Stack>
                {actions && <div css={listItemActions}>{actions}</div>}
            </div>
        </li>
    );
};
