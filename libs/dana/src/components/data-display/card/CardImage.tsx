import { cardImage } from './styles';

export interface CardImageProps {
    src: string;
    alt: string;
}

export const CardImage = ({ src, alt, ...props }: CardImageProps) => {
    return <img src={src} alt={alt} css={cardImage} />;
};
