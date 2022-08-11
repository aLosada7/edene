import { useEffect, useState } from 'react';

// Only supports right and left & touch devices for now
export const useSwipe = (ref: any) => {
    const [swipe, setSwipe] = useState<'right' | 'left' | null>(null);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50;

    useEffect(() => {
        const node = ref.current;

        if (node) {
            node.addEventListener('touchstart', onTouchStart);
            node.addEventListener('touchend', onTouchEnd);
        }

        return () => {
            node?.removeEventListener('touchstart', onTouchStart);
            node.removeEventListener('touchend', onTouchEnd);
        };
    }, [ref]);

    useEffect(() => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance < -minSwipeDistance;
        const isRightSwipe = distance > minSwipeDistance;

        if (isLeftSwipe || isRightSwipe)
            setSwipe(isLeftSwipe ? 'left' : 'right');
    }, [touchStart, touchEnd]);

    const onTouchStart = (e: any) => {
        setSwipe(null);
        setTouchStart(e.changedTouches[0].clientX);
        setTouchEnd(null);
    };

    const onTouchEnd = (e: any) => {
        setTouchEnd(e.changedTouches[0].clientX);
    };

    return [ref, swipe];
};
