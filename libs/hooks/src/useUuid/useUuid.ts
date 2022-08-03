import { useState } from 'react';

import { randomId } from './randomId';
import { useIsomorphicEffect } from '../useIsomorphicEffect/useIsomorphicEffect';

export function useUuid(staticId?: string) {
    const [uuid, setUuid] = useState('');

    useIsomorphicEffect(() => {
        setUuid(randomId());
    }, []);

    return staticId || uuid;
}
