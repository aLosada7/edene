import { Row, Col } from '@dana-components';
import { BestScorerComponent } from '../components/BestScorerComponent';
import { TeamStandingsComponent } from '../components/TeamStandingsComponent';
import { TeamStatsComponent } from '../components/TeamStatsComponent';

const ScoreboardContainer = () => {
    // here we can asks for the standings we want to display

    return (
        <Row>
            <Col md={6} direction="column">
                <TeamStatsComponent />
                <BestScorerComponent />
            </Col>
            <Col md={18}>
                <TeamStandingsComponent />
            </Col>
        </Row>
    );
};

export default ScoreboardContainer;
