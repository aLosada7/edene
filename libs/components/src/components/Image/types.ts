import { PolymorphicComponentProps, Props } from '@edene/foundations';

export const imageSizeValues = ['c', 'd', 'e'] as const;
export type ImageSize = typeof imageSizeValues[number];

export const imageObjectFitValues = ['cover', 'contain'] as const;
export type ImageObjectFit = typeof imageObjectFitValues[number];

export interface ImageProps extends Props {
    /** image source */
    src: string;

    /** alternative text */
    alt: string;

    /** Johannes sizes */
    size?: ImageSize;

    objectFit?: ImageObjectFit;
}

export type PImageProps<C> = PolymorphicComponentProps<C, ImageProps>;
export type ImgComponent = <C = 'img'>(
    props: PImageProps<C>
) => React.ReactElement;
