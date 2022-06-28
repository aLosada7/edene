import { css } from '@emotion/react';
import VirtualList from '../../shared/components/VirtualList';
import { IUser } from '../model/user';

const emptyListMessage = css`
    text-align: center;
    padding: 14px;
`;

export interface IUserListComponentProps {
    list: IUser[];
    total: number;
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    fetch: () => void;
    BodyComponent?: (User: IUser) => JSX.Element;
}

export interface IUserListItemProps {
    index: number;
    style: Record<string, unknown>;
}

export const UserListComponent = ({
    list,
    fetch,
    hasNextPage,
    isNextPageLoading,
}: IUserListComponentProps) => {
    const UserListItem = ({ index, style }: IUserListItemProps) => {
        const user = list[index];

        return (
            <p style={style}>
                User {user.name} with ID {user._id}
            </p>
        );
    };

    if (list.length === 0)
        return <div css={emptyListMessage}>No values exist</div>;

    return (
        <VirtualList
            hasNextPage={hasNextPage}
            isNextPageLoading={isNextPageLoading}
            items={list}
            itemSize={100}
            loadNextPage={fetch}
            Row={UserListItem}
        />
    );
};
