import { useState } from 'react';

import { useIsomorphicEffect } from '../useIsomorphicEffect/useIsomorphicEffect';
import { randomId } from './randomId';

export function useUuid(staticId?: string) {
    const [uuid, setUuid] = useState('');

    useIsomorphicEffect(() => {
        setUuid(randomId());
    }, []);

    return staticId || uuid;
}
