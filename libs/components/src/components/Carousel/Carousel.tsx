import { useEffect, useRef, useState } from 'react';
import { Props } from '@edene/foundations';

import { useSwipe } from '../../hooks/useSwipe';
import { Image } from '../Image';
import { ImageSize } from '../Image';
import { carousel, carouselImage, dotList, dot } from './styles';

export interface CarouselMedia {
    src: string;
    alt: string;
}

export interface CarouselProps extends Props {
    src: CarouselMedia[];
    imageSize?: ImageSize;
}

export const Carousel = (props: CarouselProps) => {
    const { src, imageSize = 'c', css, ...rest } = props;
    const [slide, setSlide] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    const [scrollRef, swipe] = useSwipe(ref);

    useEffect(() => {
        if (!swipe) return;

        const actualSlideIndex = src.findIndex(
            (el) => el.src === src[slide].src
        );

        if (swipe === 'right') setSlide((actualSlideIndex + 1) % src.length);
        if (swipe === 'left')
            setSlide(
                actualSlideIndex === 0
                    ? src.length - 1
                    : (actualSlideIndex - 1) % src.length
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [swipe]);

    return (
        <div ref={scrollRef} css={[carousel, css]} {...rest}>
            <Image
                src={src[slide].src}
                alt={src[slide].alt}
                loading={slide === 0 ? 'eager' : 'lazy'}
                size={imageSize}
                css={carouselImage}
            />
            <div css={dotList}>
                {src.map((sl, index) => (
                    <span
                        key={sl.src}
                        css={dot(sl.src === src[slide].src)}
                        onClick={() => setSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};
