import { css } from '@emotion/react';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { IFilter } from '../../shared/model/filter';
import { getUsers } from '../actions/users';
import { UserListComponent } from '../components/UserListComponent';
import { UserTableComponent } from '../components/UserTableComponent';

const userList = css`
    height: 100vh;
`;

export const UserListContainer = ({ mode, getUsers, users }: any) => {
    useEffect(() => {
        getUsers({ limit: 10, page: 0 });
    }, []);

    if (users.isNextPageLoading && users.length === 0)
        return <div>Loading...</div>;

    const UserComponent = () =>
        mode === 'list' ? (
            <UserListComponent fetch={getUsers} {...users} />
        ) : (
            <UserTableComponent fetch={getUsers} {...users} />
        );

    return (
        <div css={userList}>
            {users.error && <div>A network error occurred</div>}
            <UserComponent />
        </div>
    );
};

const mapStateToProps = (state: any, args: any) => ({
    ...state,
    mode: args.mode,
});

const mapDispatchToProps = (dispatch: any) => ({
    getUsers: (filter: IFilter) => dispatch(getUsers(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
