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

export const CardMedia = (props: CardMediaProps) => {
    const { src, alt, imageSize, css: cssOverrides, ...rest } = props;

    if (Array.isArray(src))
        return (
            <Carousel
                src={src}
                imageSize={imageSize}
                css={cssOverrides}
                {...rest}
            />
        );

    return (
        <Image
            size="d"
            src={src}
            alt={alt || 'CardMedia Image'}
            css={[cardMedia, cssOverrides] as SerializedStyles[]}
            {...rest}
        />
    );
};
