import { Tabs, Tab } from '@edene/components';

import PostContent from './PostContent';

export const ComponentTabs = ({
    selectedTab,
    onTabSelected,
    documentation,
    props,
}: any) => {
    return (
        <Tabs
            active={selectedTab}
            onTabChange={(tabKey) => onTabSelected(tabKey)}
        >
            <Tab tabKey="documentation" label="Documentation">
                <PostContent content={documentation} />
            </Tab>
            <Tab tabKey="props" label="Props">
                <PostContent content={props} />
            </Tab>
        </Tabs>
    );
};
