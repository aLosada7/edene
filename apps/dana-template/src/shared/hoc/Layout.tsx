import { useState } from 'react';
import {
    Header,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderMenuButton,
    HeaderName,
    SideNav,
    SideNavItem,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SvgBell,
    SvgGrid3x3GapFill,
    SearchIcon,
    ThemeProvider,
} from '@dana';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LayoutProps {}

export default ({ ...props }: LayoutProps) => {
    const [isSideNavExpanded, setSideNavExpanded] = useState(false);
    const handleSideNavExpand = () => setSideNavExpanded(!isSideNavExpanded);

    return (
        <ThemeProvider>
            <Header isFixed aria-label="Dana Template">
                <HeaderMenuButton
                    aria-label="Open menu"
                    onClick={handleSideNavExpand}
                    variant="light"
                    isActive={isSideNavExpanded}
                />
                <HeaderName href="/" prefix="DANA">
                    [Template]
                </HeaderName>
                <SideNav
                    isFixedNav
                    aria-label="Side navigation"
                    isChildOfHeader={true}
                    expanded={isSideNavExpanded}
                >
                    <SideNavItems>
                        <SideNavMenu title="Forms">
                            <SideNavMenuItem href="/generalForm">
                                General Form (*)
                            </SideNavMenuItem>
                            <SideNavMenuItem href="javascript:void(0)">
                                Form Wizard (*)
                            </SideNavMenuItem>
                            <SideNavMenuItem href="javascript:void(0)">
                                Form Upload (*)
                            </SideNavMenuItem>
                        </SideNavMenu>
                        <SideNavMenu title="L0 menu" isActive={true}>
                            <SideNavMenuItem href="javascript:void(0)">
                                L0 menu item
                            </SideNavMenuItem>
                            <SideNavMenuItem
                                href="javascript:void(0)"
                                aria-current="page"
                            >
                                L0 menu item
                            </SideNavMenuItem>
                            <SideNavMenuItem href="javascript:void(0)">
                                L0 menu item
                            </SideNavMenuItem>
                        </SideNavMenu>
                        <SideNavMenu title="L0 menu">
                            <SideNavMenuItem href="javascript:void(0)">
                                L0 menu item
                            </SideNavMenuItem>
                            <SideNavMenuItem href="javascript:void(0)">
                                L0 menu item
                            </SideNavMenuItem>
                            <SideNavMenuItem href="javascript:void(0)">
                                L0 menu item
                            </SideNavMenuItem>
                        </SideNavMenu>
                        <SideNavItem href="/ui/dana-components">
                            Dana Components
                        </SideNavItem>
                        <SideNavItem href="ui/datatable">DataTable</SideNavItem>
                    </SideNavItems>
                </SideNav>
                <HeaderGlobalBar>
                    <HeaderGlobalAction aria-label="Search">
                        <SearchIcon />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="Notifications" badge={7}>
                        <SvgBell />
                    </HeaderGlobalAction>
                    <HeaderGlobalAction aria-label="App" tooltipAlignment="end">
                        <SvgGrid3x3GapFill />
                    </HeaderGlobalAction>
                </HeaderGlobalBar>
            </Header>
        </ThemeProvider>
    );
};
