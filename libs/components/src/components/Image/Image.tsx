import { image } from './styles';
import { ImgComponent, PImageProps } from './types';

export const Image: ImgComponent = ((props: PImageProps<'img'>) => {
    const {
        as: Component = 'img',
        src,
        alt,
        size,
        objectFit = 'cover',
        css,
        ...rest
    } = props;

    const img = (
        <Component
            loading="lazy"
            src={src}
            alt={alt}
            css={[image(objectFit, size), css]}
            {...rest}
        />
    );

    return img;
}) as ImgComponent;
