import { Tabs, Tab } from '@edene/components';

import PostContent from './PostContent';

export const ComponentTabs = ({ selectedTab, onTabSelected, usage, props }) => {
    return (
        <Tabs
            active={selectedTab}
            onTabChange={(tabKey) => onTabSelected(tabKey)}
        >
            <Tab tabKey="usage" label="Usage">
                <PostContent content={usage} />
            </Tab>
            <Tab tabKey="props" label="Props">
                <PostContent content={props} />
            </Tab>
        </Tabs>
    );
};
