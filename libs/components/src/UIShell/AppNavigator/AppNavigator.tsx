import { FC, ReactNode } from 'react';

import { appNavigator } from './styles';

export interface AppNavigatorProps {
    children: ReactNode;
}

const AppNavigator: FC<AppNavigatorProps> = ({ children }) => {
    return (
        <header role="banner" css={appNavigator}>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {children}
            </div>
        </header>
    );
};

export default AppNavigator;
