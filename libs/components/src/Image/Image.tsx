import { SerializedStyles } from '@emotion/react';

import { image } from './styles';

export type ObjectFit = 'cover' | 'contain';

export interface ImageProps {
    src: string;
    alt: string;
    /** Johannes sizes */
    size?: string;
    objectFit?: ObjectFit;
    targetBlank?: boolean;
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const Image = ({
    src,
    alt,
    size,
    objectFit = 'cover',
    targetBlank = false,
    cssOverrides,
}: ImageProps) => {
    const img = (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            css={[image(objectFit, size), cssOverrides]}
        />
    );

    if (targetBlank) {
        <a target="_blank" href={src}>
            {img}
        </a>;
    }
    return img;
};
