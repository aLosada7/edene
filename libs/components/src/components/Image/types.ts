import { PolymorphicComponentProps, Props } from '@edene/foundations';

export const imageSizeValues = ['c', 'd', 'e'] as const;
export type ImageSize = typeof imageSizeValues[number];

export const imageObjectFitValues = ['cover', 'contain'] as const;
export type ImageObjectFit = typeof imageObjectFitValues[number];

export interface ImageProps extends Props {
    src: string;
    alt: string;
    /** Johannes sizes */
    size?: ImageSize;
    objectFit?: ImageObjectFit;
    loading?: 'eager' | 'lazy';
}

export type PImageProps<C> = PolymorphicComponentProps<C, ImageProps>;
export type ImgComponent = <C = 'img'>(
    props: PImageProps<C>
) => React.ReactElement;
