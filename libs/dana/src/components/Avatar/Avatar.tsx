import { useState, useEffect } from 'react';
import './avatar.scss';

import defaultAvatar from '../../../assets/img/avatarIcon.jpeg';

export type AvatarShape = 'circle' | 'square';
export type AvatarDotPosition = 'top' | 'bottom';

export interface AvatarProps {
  src?: string;
  name?: string;
  shape?: AvatarShape;
  connected?: boolean;
  outline?: boolean;
  dotPosition?: AvatarDotPosition;
}

export function Avatar({
  shape = 'circle',
  dotPosition = 'top',
  ...props
}: AvatarProps) {
  const [initials, setInitials] = useState('');
  useEffect(() => {
    if (props.name)
      setInitials(
        props.name
          .split(' ')
          .map((initial) => initial[0])
          .join('')
      );
  }, [props.name]);
  return (
    <div className={`avatar ${shape === 'circle' ? 'circle' : 'square'}`}>
      {props.src ? (
        <img
          src={props.src}
          className={`img ${shape === 'circle' ? 'circle' : 'square'} ${
            props.outline ? 'outline' : ''
          }`}
          alt="Avatar"
        ></img>
      ) : props.name ? (
        <div className="img circle flex-center initials">
          <span>{initials}</span>
        </div>
      ) : (
        <img
          src={defaultAvatar}
          className="img circle icon"
          alt="Default Avatar"
        ></img>
      )}
      {props.connected ? (
        <span
          className={`connected ${
            shape === 'circle'
              ? `${dotPosition}-circle`
              : `${dotPosition}-square`
          }`}
        ></span>
      ) : null}
    </div>
  );
}

export default Avatar;
