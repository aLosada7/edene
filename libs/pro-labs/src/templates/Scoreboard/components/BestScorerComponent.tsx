import { css } from '@emotion/react';

import {
    Avatar,
    Card,
    CardSection,
    CardHeader,
    Row,
    Col,
    Text,
} from '@edene/components';
import { grays } from '@edene/foundations';

export const BestScorerComponent = () => (
    <Card
        css={css`
            margin: 1rem;
            text-align: left;
        `}
    >
        <CardHeader>SCORING</CardHeader>
        <CardSection>
            <Row py={1}>
                <Col lg={8} direction="column" align="center">
                    <Avatar shape="circle" size={80} />
                </Col>
                <Col lg={16} direction="column">
                    <Row direction="column" px={2}>
                        <Text weight="bold">Danial Berry</Text>
                        <Text size="small">Jason Chapman, Jake Sullivan</Text>
                        <Text size="xsmall" color={grays[3]}>
                            11:20 / 1st
                        </Text>
                    </Row>
                </Col>
            </Row>
        </CardSection>
    </Card>
);
