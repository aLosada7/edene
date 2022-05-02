import { IUser } from '../model/user';

interface UserProps {
    user: IUser;
}

const UserDetailLite = ({ user }: UserProps) => {
    return <li className="user">{user.name}</li>;
};

export default UserDetailLite;
