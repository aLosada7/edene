import { useContext } from 'react';

import { ModalsContext } from '../ModalsProvider';

export const useModals = () => {
    const ctx = useContext(ModalsContext);

    if (!ctx) throw new Error('Modal called outside of context');

    return ctx;
};
