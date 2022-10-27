import { useRef } from 'react';

import { useHover } from '@edene/hooks';

import { Text } from '..';
import { Tooltip } from './Tooltip';

export default {
    title: 'Overlay/Tooltip',
    component: Tooltip,
};

export const Default = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [hoverRef, hovering] = useHover(ref);

    return (
        <div ref={hoverRef}>
            <Text>Hover me!</Text>
            {hovering && <Tooltip />}
        </div>
    );
};
