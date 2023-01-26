import { image } from './styles';
import { ImgComponent, PImageProps } from './types';

export const Image: ImgComponent = ((props: PImageProps<'img'>) => {
    const {
        component: Element = 'img',
        src,
        alt,
        size,
        objectFit = 'cover',
        css: cssOverrides,
        ...rest
    } = props;

    const img = (
        <Element
            loading="lazy"
            src={src}
            alt={alt}
            css={[image(objectFit, size), cssOverrides]}
            {...rest}
        />
    );

    return img;
}) as ImgComponent;
