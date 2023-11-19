import { useState } from 'react';
import { Tab, Tabs } from '@edene/components';

import TeamSummary from './TeamSummary';

const Scoreboard = () => {
    const [teamSelected, setTeamSelected] = useState('canada');

    const onChange = (tabKey: string) => {
        setTeamSelected(tabKey);
    };
    return (
        <Tabs active={teamSelected} onTabChange={onChange}>
            <Tab tabKey="canada" label="🇨🇦 Canada">
                <TeamSummary />
            </Tab>
            <Tab tabKey="eeuu" label="🇺🇸 United States">
                <TeamSummary />
            </Tab>
        </Tabs>
    );
};

export default Scoreboard;
