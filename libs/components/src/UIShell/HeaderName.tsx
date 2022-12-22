import { useTheme } from '@edene/foundations';

import { headerName } from './stylesHeader';

export interface HeaderNameProps {
    children: React.ReactNode;
    href: string;
    prefix?: string;
}

export const HeaderName = ({
    children,
    href,
    prefix,
    ...props
}: HeaderNameProps) => {
    const theme = useTheme();
    return (
        <a css={headerName(theme)} href={href}>
            <span translate="no">
                {prefix ? prefix : ''}
                {children}
            </span>
        </a>
    );
};
