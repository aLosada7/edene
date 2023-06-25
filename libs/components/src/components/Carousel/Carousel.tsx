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
    const [slide, setSlide] = useState(src[0]);
    const ref = useRef<HTMLDivElement>(null);

    const [scrollRef, swipe] = useSwipe(ref);

    useEffect(() => {
        if (!swipe) return;

        const actualSlideIndex = src.findIndex((el) => el.src === slide.src);

        if (swipe === 'right')
            setSlide(src[(actualSlideIndex + 1) % src.length]);
        if (swipe === 'left')
            setSlide(
                actualSlideIndex === 0
                    ? src[src.length - 1]
                    : src[(actualSlideIndex - 1) % src.length]
            );
    }, [swipe]);

    return (
        <div ref={scrollRef} css={[carousel, css]} {...rest}>
            <Image
                src={slide.src}
                alt={slide.alt}
                size={imageSize}
                css={carouselImage}
            />
            <div css={dotList}>
                {src.map((sl) => (
                    <span
                        key={sl.src}
                        css={dot(sl.src === slide.src)}
                        onClick={() => setSlide(sl)}
                    ></span>
                ))}
            </div>
        </div>
    );
};
