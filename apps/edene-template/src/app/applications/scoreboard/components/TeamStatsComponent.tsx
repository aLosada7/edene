import { css } from '@emotion/react';

import {
    Row,
    Col,
    Card,
    CardSection,
    Text,
    CardHeader,
} from '@edene/components';
import { grays } from '@edene/foundations';

export const TeamStatsComponent = () => (
    <Card
        css={css`
            margin: 1rem;
            text-align: left;
        `}
    >
        <CardHeader>TEAM STATS</CardHeader>
        <CardSection>
            <Row py={1}>
                <Col sm={12} md={8} direction="column">
                    <Text size="xsmall" color={grays[3]}>
                        PTS
                    </Text>
                    <Text weight="bold">55</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="xsmall" color={grays[3]}>
                        AST
                    </Text>
                    <Text weight="bold">12</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="xsmall" color={grays[3]}>
                        REB
                    </Text>
                    <Text weight="bold">22</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="xsmall" color={grays[3]}>
                        % T3
                    </Text>
                    <Text weight="bold">55%</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="small" color={grays[3]}>
                        STL
                    </Text>
                    <Text weight="bold">5</Text>
                </Col>
                <Col sm={12} md={8} direction="column">
                    <Text size="small" color={grays[3]}>
                        BLK
                    </Text>
                    <Text weight="bold">3</Text>
                </Col>
            </Row>
        </CardSection>
    </Card>
);
