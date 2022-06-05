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
    size = 'd',
    objectFit = 'cover',
    targetBlank = false,
    cssOverrides,
    ...props
}: ImageProps) => {
    const img = (
        <img src={src} alt={alt} css={[image(size, objectFit), cssOverrides]} />
    );

    if (targetBlank) {
        // eslint-disable-next-line react/jsx-no-target-blank
        <a target="_blank" href={src}>
            {img}
        </a>;
    }
    return img;
};
