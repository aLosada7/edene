import { Children, cloneElement } from 'react';
import { Props, useTheme } from '@edene/foundations';

import {
    header,
    headerHeight,
    headerPosition,
    headerTheme,
} from './stylesHeader';

export interface HeaderProps extends Props {
    /**
     * The height of the header
     * By default its value is 48px
     */
    fixed?: boolean;
    height?: number;
    'aria-label': string;
    children?: React.ReactElement | React.ReactElement[];
}

export const Header = ({
    fixed = false,
    height = 48,
    children,
    css,
    ...props
}: HeaderProps) => {
    const { theme } = useTheme();

    return (
        <header
            role="banner"
            css={[
                header(theme),
                headerTheme(theme),
                headerPosition(fixed),
                headerHeight(height),
                css,
            ]}
            {...props}
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
