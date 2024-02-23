import { ReactNode } from 'react';
import { Props, useTheme } from '@edene/foundations';

import { headerName } from './stylesHeader';

export interface HeaderNameProps extends Props {
    children: ReactNode;
    href: string;
    prefix?: string;
}

export const HeaderName = ({
    children,
    href,
    prefix,
    css,
    ...props
}: HeaderNameProps) => {
    const theme = useTheme();
    return (
        <a css={[headerName(theme), css]} href={href} {...props}>
            <span translate="no">
                {prefix ? prefix : ''}
                {children}
            </span>
        </a>
    );
};
