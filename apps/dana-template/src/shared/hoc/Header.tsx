import { css } from '@emotion/react';

import { Header as DanaHeader, HeaderMenuButton, from } from '@dana';

const header = (sideNavWidth: number, isSideNavExpanded: boolean) => css`
    ${isSideNavExpanded && from.desktop} {
        margin-left: ${sideNavWidth}px;
    }
`;

interface HeaderProps {
    sideNavWidth: number;
    isSideNavExpanded: boolean;
    onToggleSideNav: () => void;
}

export const Header = ({
    sideNavWidth,
    isSideNavExpanded,
    onToggleSideNav,
}: HeaderProps) => {
    return (
        <DanaHeader
            isFixed
            cssOverrides={header(sideNavWidth, isSideNavExpanded)}
            aria-label="Dana Template"
        >
            <HeaderMenuButton
                alwaysVisible
                aria-label="Open menu"
                onClick={onToggleSideNav}
                variant="light"
                isActive={isSideNavExpanded}
            />
        </DanaHeader>
    );
};
