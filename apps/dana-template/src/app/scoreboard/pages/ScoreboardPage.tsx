import { Suspense, useState } from 'react';

import { Tabs, Tab } from '@dana-components';

import React from 'react';

import { Header } from '../../shared';

const ScoreboardContainer = React.lazy(
    () => import('../containers/ScoreboardContainer')
);

export const ScoreboardPage = () => {
    const [teamSelected, setTeamSelected] = useState('canada');

    const onChange = (tabKey: string) => {
        setTeamSelected(tabKey);
    };

    return (
        <>
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
        </>
    );
};
