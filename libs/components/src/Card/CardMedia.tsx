import { Carousel, CarouselMedia } from '../Carousel';
import { Image } from '../Image';
import { cardMedia } from './styles';

export interface CardMediaProps {
    src: string | CarouselMedia[];
    alt?: string;
}

export const CardMedia = (props: CardMediaProps) => {
    const { src, alt } = props;

    if (Array.isArray(src)) return <Carousel src={src} />;

    return (
        <Image
            src={src}
            alt={alt || 'CardMedia Image'}
            cssOverrides={cardMedia}
        />
    );
};
