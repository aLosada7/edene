import { useEffect, useState } from 'react';

export const useHover = (ref: any) => {
    const [hovering, setHover] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);
        }

        return () => {
            node?.removeEventListener('mouseover', handleMouseOver);
            node?.removeEventListener('mouseout', handleMouseOut);
        };
    }, [ref]);

    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () => setHover(false);

    return [ref, hovering];
};
