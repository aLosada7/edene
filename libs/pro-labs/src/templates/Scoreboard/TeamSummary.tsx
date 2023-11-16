import { Col, Row } from '@edene/components';
import TeamStats from './TeamStats';
import Scoring from './Scoring';
import GameStandings from './GameStandings';

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
