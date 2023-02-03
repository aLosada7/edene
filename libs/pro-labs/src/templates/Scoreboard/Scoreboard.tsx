import React, { Suspense, useState } from 'react';

import { Tabs, Tab, Heading } from '@edene/components';

const ScoreboardContainer = React.lazy(
    () => import('./containers/ScoreboardContainer')
);

const Scoreboard = () => {
    const [teamSelected, setTeamSelected] = useState('canada');

    const onChange = (tabKey: string) => {
        setTeamSelected(tabKey);
    };

    return (
        <div>
            <Tabs active={teamSelected} onTabChange={onChange}>
                <Tab tabKey="canada" label="🇨🇦 Canada">
                    <Heading>Canada</Heading>
                </Tab>
                <Tab tabKey="eeuu" label="🇺🇸 United States">
                    <Suspense fallback={<div>Loading...</div>}>
                        <ScoreboardContainer />
                    </Suspense>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Scoreboard;
