import { useState, useEffect } from 'react';

import { useThemeContext } from '@edene/foundations';

import { avatar, avatarConnected, avatarImg, avatarInitials } from './styles';

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
    connected,
    outline,
    ...props
}: AvatarProps) {
    const [initials, setInitials] = useState<string | undefined>();
    useEffect(() => {
        if (props.name)
            setInitials(
                props.name
                    .split(' ')
                    .map((initial) => initial[0])
                    .join('')
            );
    }, [props.name]);

    const { theme } = useThemeContext();

    return (
        <div css={avatar(shape, { theme })}>
            {props.src ? (
                <img
                    src={props.src as any}
                    css={avatarImg(shape, outline)}
                    alt="Avatar"
                ></img>
            ) : props.name ? (
                <div css={[avatarImg('circle'), avatarInitials({ theme })]}>
                    <span>{initials}</span>
                </div>
            ) : null}
            {connected ? (
                <span css={avatarConnected(dotPosition, shape)}></span>
            ) : null}
        </div>
    );
}

export default Avatar;
