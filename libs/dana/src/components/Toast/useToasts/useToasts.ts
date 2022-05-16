import { useContext } from 'react';

import { ToastsContext } from '../ToastsProvider';

export const useToasts = () => {
    const ctx = useContext(ToastsContext);

    if (!ctx) throw new Error('Toast called outside of context');

    return ctx;
};
