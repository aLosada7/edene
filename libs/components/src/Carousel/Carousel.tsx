import { useState } from 'react';

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

    return (
        <div css={carousel}>
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
