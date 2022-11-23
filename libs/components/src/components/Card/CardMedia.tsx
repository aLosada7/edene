import { Carousel, CarouselMedia } from '../Carousel';
import { Image, ImageSize } from '../Image';
import { cardMedia } from './styles';

export interface CardMediaProps {
    src: string | CarouselMedia[];
    alt?: string;
    imageSize?: ImageSize;
}

export const CardMedia = (props: CardMediaProps) => {
    const { src, alt, imageSize } = props;

    if (Array.isArray(src)) return <Carousel src={src} imageSize={imageSize} />;

    return (
        <Image
            size="d"
            src={src}
            alt={alt || 'CardMedia Image'}
            cssOverrides={cardMedia}
        />
    );
};
