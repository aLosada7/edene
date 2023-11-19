import { Meta,Story } from '@storybook/react';

import {
    Header,
    HeaderGlobalAction,
    HeaderGlobalBar,
    HeaderName,
    HeaderPanel,
    HeaderProps,
} from '.';

export default {
    component: Header,
    title: 'UI Shell/Header',
    parameters: {
        layout: 'fullscreen',
    },
} as Meta;

export const Default: Story<HeaderProps> = () => (
    <Header fixed aria-label="EDENE Library Name">
        <HeaderName href="#" prefix="EDENE">
            [Library]
        </HeaderName>
    </Header>
);

export const WithActions: Story<HeaderProps> = () => (
    <Header fixed aria-label="EDENE Library Name">
        <HeaderName href="#" prefix="EDENE">
            [Library]
        </HeaderName>
        <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search">search</HeaderGlobalAction>
            <HeaderGlobalAction badge={7} aria-label="Notifications">
                notifications
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App">apps</HeaderGlobalAction>
        </HeaderGlobalBar>
    </Header>
);

export const WithActionsAndPanel: Story<HeaderProps> = () => (
    <Header fixed aria-label="EDENE Library Name">
        <HeaderName href="#" prefix="EDENE">
            [Library]
        </HeaderName>
        <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="Search">search</HeaderGlobalAction>
            <HeaderGlobalAction aria-label="Notifications">
                notifications
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label="App">apps</HeaderGlobalAction>
        </HeaderGlobalBar>
        <HeaderPanel aria-label="Header Panel" expanded></HeaderPanel>
    </Header>
);
