import { connect } from 'react-redux';

import { getUsers } from '../actions/users';
import User from '../components/User';
import { IUser } from '../model/user';

export function UserList({ getUsers, users }: any) {
    console.log(users);
    return (
        <div className="UserList">
            <button
                className="loadButton"
                onClick={getUsers}
                disabled={users.loading}
            >
                Load Users
            </button>
            {users.users.length > 0 && (
                <ul>
                    {users.users.map((user: IUser) => {
                        return <User user={user} key={user.id} />;
                    })}
                </ul>
            )}
            {users.error && <div>A network error occurred</div>}
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    ...state,
});

const mapDispatchToProps = (dispatch: any) => ({
    getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
