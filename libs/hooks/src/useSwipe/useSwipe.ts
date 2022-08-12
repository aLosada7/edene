import { useEffect, useState } from 'react';

// Only supports right and left
export const useSwipe = (ref: any) => {
    const [swipe, setSwipe] = useState<'right' | 'left' | null>(null);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50;

    useEffect(() => {
        const node = ref.current;

        if (node) {
            if (isTouchDevice()) {
                node.addEventListener('touchstart', handleTouchStart);
                node.addEventListener('touchend', handleTouchEnd);
            } else {
                node.addEventListener('mousedown', handleMouseDown);
                node.addEventListener('mouseup', handleMouseUp);
            }
        }

        return () => {
            if (node) {
                if (isTouchDevice()) {
                    node.removeEventListener('touchstart', handleTouchStart);
                    node.removeEventListener('touchend', handleTouchEnd);
                } else {
                    node.addEventListener('mousedown', handleMouseDown);
                    node.addEventListener('mouseup', handleMouseUp);
                }
            }
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

    const startSwipe = () => {
        setSwipe(null);
        setTouchEnd(null);
    };

    const handleTouchStart = (e: TouchEvent) => {
        startSwipe();
        setTouchStart(e.changedTouches[0].clientX);
    };

    const handleTouchEnd = (e: TouchEvent) => {
        setTouchEnd(e.changedTouches[0].clientX);
    };

    const handleMouseDown = (event: MouseEvent) => {
        event.preventDefault(); // disable the user from drop text
        startSwipe();
        const { x } = getDimensionsFromEvent(event);
        setTouchStart(x);
    };

    const handleMouseUp = (event: MouseEvent) => {
        const { x } = getDimensionsFromEvent(event);
        setTouchEnd(x);
    };

    const getDimensionsFromEvent = (event: MouseEvent) => {
        let x = event.clientX,
            y = event.clientY;

        if (ref.current) {
            const { top, left } = ref.current.getBoundingClientRect();
            x -= left;
            y -= top;
        }

        return { x, y };
    };

    return [ref, swipe];
};

const isTouchDevice = () => 'ontouchstart' in window;
