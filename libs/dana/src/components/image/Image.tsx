import { SerializedStyles } from '@emotion/react';
import { img } from './styles';

export interface ImageProps {
    src: string;
    alt: string;
    /** Johannes sizes */
    size?: string;
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const Image = ({
    src,
    alt,
    size = 'd',
    cssOverrides,
    ...props
}: ImageProps) => {
    return <img src={src} alt={alt} css={[img(size), cssOverrides]} />;
};
