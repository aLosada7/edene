import { useState, useEffect } from 'react';

import { Props, useThemeContext } from '@edene/foundations';

import { avatar, avatarConnected, avatarImg, avatarInitials } from './styles';

export type AvatarShape = 'circle' | 'square';
export type AvatarDotPosition = 'top' | 'bottom';

export interface AvatarProps extends Props {
    src?: string;
    size: number;
    name?: string;
    shape?: AvatarShape;
    connected?: boolean;
    outline?: boolean;
    dotPosition?: AvatarDotPosition;
}

export function Avatar({
    size,
    shape = 'circle',
    dotPosition = 'top',
    connected,
    outline,
    cssOverrides,
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
        <div css={[avatar(shape, size, { theme }), cssOverrides]}>
            {props.src ? (
                <img
                    src={props.src as any}
                    css={[avatarImg(shape, outline)]}
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
