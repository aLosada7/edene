import { css } from '@emotion/react';

import { Header as DanaHeader, HeaderMenuButton } from '@edene/components';
import { from } from '@edene/foundations';

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
                active={isSideNavExpanded}
                aria-label="Open menu"
                onClick={onToggleSideNav}
                variant="light"
            />
        </DanaHeader>
    );
};
