import { SerializedStyles } from '@emotion/react';
import { Props } from '@edene/foundations';

import { Carousel, CarouselMedia } from '../Carousel';
import { Image, ImageSize } from '../Image';
import { cardMedia } from './styles';

export interface CardMediaProps extends Props {
    src: string | CarouselMedia[];
    alt?: string;
    imageSize?: ImageSize;
}

export const CardMedia = ({
    src,
    alt,
    imageSize,
    css,
    ...rest
}: CardMediaProps) => {
    if (Array.isArray(src))
        return <Carousel src={src} imageSize={imageSize} css={css} {...rest} />;

    return (
        <Image
            size="d"
            src={src}
            alt={alt || 'CardMedia Image'}
            css={[cardMedia, css] as SerializedStyles[]}
            {...rest}
        />
    );
};
