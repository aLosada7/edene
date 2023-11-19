import { Col, Row } from '@edene/components';

import GameStandings from './GameStandings';
import Scoring from './Scoring';
import TeamStats from './TeamStats';

const TeamSummary = () => (
    <Row noGlutters>
        <Col md={8} direction="column" gap={4}>
            <TeamStats />
            <Scoring />
        </Col>
        <Col md={16}>
            <GameStandings />
        </Col>
    </Row>
);

export default TeamSummary;
