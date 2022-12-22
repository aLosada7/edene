import { SerializedStyles } from '@emotion/react';
import { Children, cloneElement } from 'react';

import { useTheme } from '@edene/foundations';

import { header, headerPosition, headerHeight } from './stylesHeader';

export interface HeaderProps {
    /**
     * The height of the header
     * By default its value is 48px
     */
    fixed?: boolean;
    height?: number;
    'aria-label': string;
    children?: React.ReactElement | React.ReactElement[];
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const Header = ({
    fixed = false,
    height = 48,
    children,
    cssOverrides,
    ...props
}: HeaderProps) => {
    const theme = useTheme();

    return (
        <header
            css={[
                header(theme),
                headerPosition(fixed),
                headerHeight(height),
                cssOverrides,
            ]}
            role="banner"
            aria-label={props['aria-label']}
        >
            {children &&
                Children.map(children, (child) => {
                    return cloneElement(child, {
                        headerHeight: height,
                    });
                })}
        </header>
    );
};
