import { image } from './styles';
import { ImgComponent, PImageProps } from './types';

export const Image: ImgComponent = (({
    as: Component = 'img',
    src,
    alt,
    size,
    objectFit = 'cover',
    loading = 'eager',
    css,
    ...props
}: PImageProps<'img'>) => {
    const img = (
        <Component
            src={src}
            alt={alt}
            loading={loading}
            css={[image(objectFit, size), css]}
            {...props}
        />
    );

    return img;
}) as ImgComponent;
