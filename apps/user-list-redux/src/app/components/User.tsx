import React from 'react';
import { IUser } from '../types/user';
import './User.css';

interface UserProps {
    user: IUser;
}

const User = ({ user }: UserProps) => {
    return <li className="user">{user.name}</li>;
};

export default User;
