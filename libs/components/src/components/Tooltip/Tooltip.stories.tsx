import { useRef } from 'react';

import { useHover } from '../../hooks/useHover';
import { Text } from '../../typography/Text';
import { Tooltip } from './Tooltip';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
};

export const Default = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [hoverRef, hovering] = useHover(ref);

    return (
        <div ref={hoverRef}>
            <Text type="regular">Hover me!</Text>
            {hovering && <Tooltip />}
        </div>
    );
};
