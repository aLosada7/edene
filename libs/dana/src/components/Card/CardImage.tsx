import { Image } from '../Image';
import { cardImage } from './styles';

export interface CardImageProps {
    size?: string;
    src: string;
    alt: string;
}

export const CardImage = ({
    src,
    alt,
    size = 'c',
    ...props
}: CardImageProps) => {
    return <Image src={src} alt={alt} size={size} cssOverrides={cardImage} />;
};
