import { css } from '@emotion/react';

import { Row, Col, Card, CardBody, Text, CardHeader } from '@edene/components';

export const TeamStatsComponent = () => (
    <Card
        cssOverrides={css`
            margin: 1rem;
            text-align: left;
        `}
    >
        <CardHeader>TEAM STATS</CardHeader>
        <CardBody>
            <Row py={1}>
                <Col sm={12} md={8} direction="column">
                    <Text size="sm">PTS</Text>
                    <Text weight="bold">55</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="sm">AST</Text>
                    <Text weight="bold">12</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="sm">REB</Text>
                    <Text weight="bold">22</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="sm">% T3</Text>
                    <Text weight="bold">55%</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="sm">STL</Text>
                    <Text weight="bold">5</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="sm">BLK</Text>
                    <Text weight="bold">3</Text>
                </Col>
            </Row>
        </CardBody>
    </Card>
);
