import React, { ReactElement } from 'react';

import { DanaColor } from '@dana-foundations';

import { Props } from '../../helpers';
import { tabList, tabs, tabPanel } from './styles';
import { TabsProvider } from './useTabs';

export interface TabsProps extends Props {
    active: string;
    color?: DanaColor;
    orientation?: 'horizontal' | 'vertical';
    onTabChange: (tabKey: string) => void;
    children: ReactElement | ReactElement[];
}

const defaultProps: Required<Pick<TabsProps, 'orientation'>> = {
    orientation: 'horizontal',
};

export const Tabs = (props: TabsProps) => {
    const { children, ...context } = { ...defaultProps, ...props };

    const activeChildren = Array.isArray(children)
        ? children.find((child) => child.props.tabKey === context.active)
        : children;

    return (
        <TabsProvider value={context}>
            <div css={tabs(context.orientation)}>
                <div css={tabList(context.orientation)} role="tablist">
                    {children}
                </div>
                <div css={tabPanel(context.orientation)}>
                    {activeChildren && activeChildren.props.children}
                </div>
            </div>
        </TabsProvider>
    );
};
