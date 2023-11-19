import { FC, ReactNode } from 'react';

import { appNavigatorItem } from './styles';

export interface AppNavigatorItemProps {
    children: ReactNode;
    href: string;
    'aria-current': boolean;
}

const AppNavigatorItem: FC<AppNavigatorItemProps> = ({
    children,
    ...props
}) => (
    <a css={appNavigatorItem} {...props}>
        {children}
    </a>
);

export default AppNavigatorItem;
