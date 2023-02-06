import { Group } from '../../layout/Group';
import { Stack } from '../../layout/Stack';
import { listItem, listItemActions } from './styles';
import { ListItemProps } from './types';

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
