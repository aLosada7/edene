import { listItem } from './styles';
import { ListItemProps } from './types';

export const ListItem = (props: ListItemProps) => {
    const { children, ...rest } = props;

    return (
        <li css={listItem} {...rest}>
            {children}
        </li>
    );
};
