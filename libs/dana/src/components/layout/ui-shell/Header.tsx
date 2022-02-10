import { SerializedStyles } from '@emotion/react';
import useThemeContext from '../../../foundations/theme/useThemeContext';
import { header, headerPosition, headerHeight } from './stylesHeader';

export interface HeaderProps {
    /**
     * The height of the header
     * By default its value is 12 = 3rem
     */
    isFixed?: boolean;
    height?: number;
    'aria-label': string;
    children: React.ReactElement | React.ReactElement[];
    cssOverrides?: SerializedStyles | SerializedStyles[];
}

export const Header = ({
    isFixed = false,
    height = 12,
    children,
    cssOverrides,
    ...props
}: HeaderProps) => {
    const theme = useThemeContext();

    return (
        <header
            css={[
                header(theme),
                headerPosition(isFixed),
                headerHeight(height),
                cssOverrides,
            ]}
            role="banner"
            aria-label={props['aria-label']}
        >
            {children}
        </header>
    );
};
