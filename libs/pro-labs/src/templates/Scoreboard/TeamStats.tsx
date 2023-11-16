import {
    Card,
    CardHeader,
    CardSection,
    Col,
    Row,
    Text,
} from '@edene/components';
import { css } from '@emotion/react';

const TeamStats = () => (
    <Card
        css={css`
            text-align: left;
        `}
    >
        <CardHeader>TEAM STATS</CardHeader>
        <CardSection>
            <Row py={1}>
                <Col sm={12} md={8} direction="column">
                    <Text size="small">PTS</Text>
                    <Text weight="bold">55</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="small">AST</Text>
                    <Text weight="bold">12</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="small">REB</Text>
                    <Text weight="bold">22</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="small">% T3</Text>
                    <Text weight="bold">55%</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="small">STL</Text>
                    <Text weight="bold">5</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="small">BLK</Text>
                    <Text weight="bold">3</Text>
                </Col>
            </Row>
        </CardSection>
    </Card>
);

export default TeamStats;
