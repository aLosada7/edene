import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Props } from '@edene/foundations';

import { headerGlobalItem } from './stylesHeader';

export interface HeaderGlobalItemProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        Props {
    children: ReactNode;
}

export const HeaderGlobalItem = ({
    children,
    css,
    ...props
}: HeaderGlobalItemProps) => {
    return (
        <button css={[headerGlobalItem, css]} {...props}>
            {children}
        </button>
    );
};
