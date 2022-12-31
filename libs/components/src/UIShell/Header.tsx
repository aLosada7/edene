import { Children, cloneElement } from 'react';
import { Props, useTheme } from '@edene/foundations';

import { header, headerPosition, headerHeight } from './stylesHeader';

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

export const Header = (props: HeaderProps) => {
    const {
        fixed = false,
        height = 48,
        children,
        css: cssOverrides,
        ...rest
    } = props;
    const theme = useTheme();

    return (
        <header
            role="banner"
            css={[
                header(theme),
                headerPosition(fixed),
                headerHeight(height),
                cssOverrides,
            ]}
            {...rest}
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
