import React, { Suspense, useState } from 'react';

import { Tabs, Tab } from '@edene/components';

import { Header } from '../../shared';

const ScoreboardContainer = React.lazy(
    () => import('../containers/ScoreboardContainer')
);

const ScoreboardPage = () => {
    const [teamSelected, setTeamSelected] = useState('canada');

    const onChange = (tabKey: string) => {
        setTeamSelected(tabKey);
    };

    return (
        <div>
            <Header title="Scoreboard" />

            <Tabs active={teamSelected} onTabChange={onChange}>
                <Tab tabKey="canada" label="🇨🇦 Canada">
                    <Header title="Canada" />
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

export default ScoreboardPage;
