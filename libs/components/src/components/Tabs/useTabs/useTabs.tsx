import { createContext, useContext } from 'react';
import { EdeneColor } from '@edene/foundations';

export type TabsOrientation = 'horizontal' | 'vertical';

interface TabContextProps {
    orientation: TabsOrientation;
    active: string;
    color?: EdeneColor;
    onTabChange: (tabKey: string) => void;
}

const TabsContext = createContext<TabContextProps | null>(null);

export const TabsProvider = TabsContext.Provider;

/*************************************************************************************************/

export const useTabs = () => {
    const ctx = useContext(TabsContext);

    if (!ctx) throw new Error('Tabs called outside of context');

    return ctx;
};
