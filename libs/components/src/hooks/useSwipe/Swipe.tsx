import { useRef } from 'react';

import { Text } from '../../typography/Text';
import { useSwipe } from './index';

export const Swipe = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [scrollRef, swipe] = useSwipe(ref);

    return (
        <div
            ref={scrollRef}
            style={{ border: '1px solid #212529', textAlign: 'center' }}
        >
            <Text>
                {swipe ? `You swiped ${swipe} ` : 'It is time to swipe'}
            </Text>
        </div>
    );
};
