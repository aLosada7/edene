import { Props } from '@edene/foundations';

import { image } from './styles';

export type ObjectFit = 'cover' | 'contain';
export type ImageSize = 'c' | 'd' | 'e';

export interface ImageProps extends Props {
    src: string;

    alt: string;

    /** Johannes sizes */
    size?: ImageSize;

    objectFit?: ObjectFit;

    targetBlank?: boolean;
}

export const Image = (props: ImageProps) => {
    const {
        src,
        alt,
        size,
        objectFit = 'cover',
        targetBlank = false,
        css: cssOverrides,
        ...rest
    } = props;
    const img = (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            css={[image(objectFit, size), cssOverrides]}
            {...rest}
        />
    );

    if (targetBlank) {
        <a target="_blank" rel="noreferrer" href={src} {...rest}>
            {img}
        </a>;
    }
    return img;
};
