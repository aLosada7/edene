import { IUser } from '../types/user';

interface UserProps {
    user: IUser;
}

const User = ({ user }: UserProps) => {
    return <li className="user">{user.name}</li>;
};

export default User;
