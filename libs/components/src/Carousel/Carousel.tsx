import { useEffect, useRef, useState } from 'react';

import { useSwipe } from '@edene/hooks';

import { Image } from '../Image';
import { carousel, carouselImage, dotList, dot } from './styles';

export interface CarouselMedia {
    src: string;
    alt: string;
}

export interface CarouselProps {
    src: CarouselMedia[];
}

export const Carousel = (props: CarouselProps) => {
    const { src } = props;
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
        <div ref={scrollRef} css={carousel}>
            <Image
                src={slide.src}
                alt={slide.alt}
                cssOverrides={carouselImage}
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
