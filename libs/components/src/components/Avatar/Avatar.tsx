import { useState, useEffect } from 'react';

import { Props, useTheme } from '@edene/foundations';

import { Image } from '../Image';
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

export function Avatar(props: AvatarProps) {
    const {
        size,
        shape = 'circle',
        dotPosition = 'top',
        connected,
        outline,
        css: cssOverrides,
        ...rest
    } = props;
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

    const { theme } = useTheme();

    return (
        <div css={[avatar(shape, size, { theme }), cssOverrides]} {...rest}>
            {props.src ? (
                <Image
                    src={props.src as any}
                    css={[avatarImg(shape, outline)]}
                    alt="Avatar"
                />
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
