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
                    <Text type="small">PTS</Text>
                    <Text type="regular" weight="bold">
                        55
                    </Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text type="small">AST</Text>
                    <Text type="regular" weight="bold">
                        12
                    </Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text type="small">REB</Text>
                    <Text type="regular" weight="bold">
                        22
                    </Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text type="small">% T3</Text>
                    <Text type="regular" weight="bold">
                        55%
                    </Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text type="small">STL</Text>
                    <Text type="regular" weight="bold">
                        5
                    </Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text type="small">BLK</Text>
                    <Text type="regular" weight="bold">
                        3
                    </Text>
                </Col>
            </Row>
        </CardSection>
    </Card>
);

export default TeamStats;
