import { Image } from '../../image';
import { cardImage } from './styles';

export interface CardImageProps {
    src: string;
    alt: string;
}

export const CardImage = ({ src, alt, ...props }: CardImageProps) => {
    return <Image src={src} alt={alt} cssOverrides={cardImage} />;
};
