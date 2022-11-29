import { EdeneColor, Props } from '@edene/foundations';

import { tabList, tabs, tabPanel } from './styles';
import { TabsProvider } from './useTabs';

export interface TabsProps extends Props {
    active: string;
    color?: EdeneColor;
    orientation?: 'horizontal' | 'vertical';
    onTabChange: (tabKey: string) => void;
    children: React.ReactElement | React.ReactElement[];
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
            <div css={tabs(context.orientation)} {...props}>
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
