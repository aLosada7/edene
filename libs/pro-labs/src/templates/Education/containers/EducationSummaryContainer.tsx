import {
    Avatar,
    Box,
    Card,
    CardSection,
    Col,
    Heading,
    Row,
    Text,
} from '@edene/components';
import { grays } from '@edene/foundations';
import { css } from '@emotion/react';

const totalEarnings = css`
    background-color: ${grays[6]};
    border-radius: 4px;
    padding: 4px;
    height: fit-content;
`;

export const EducationSummaryContainer = () => {
    return (
        <Card>
            <CardSection borderBottom>
                <Row>
                    <Col md={16} direction="row">
                        <Avatar size={54} name="Edene Tuition Center"></Avatar>
                        <Row noGlutters px={4}>
                            <Box mb={1}>
                                <Heading type="h1">
                                    Edene Tuition Center
                                </Heading>
                            </Box>
                            <Row noGlutters gap={1}>
                                <Text
                                    type="regular"
                                    weight="bold"
                                    color={grays[2]}
                                >
                                    400 students
                                </Text>
                                <Text type="regular" color="success">
                                    www.edenetuitioncenter.com
                                </Text>
                            </Row>
                        </Row>
                    </Col>
                    <Col md={8} align="horizontal-end">
                        <Box css={totalEarnings}>
                            <Text type="xsmall">$12.2k Total Earnings</Text>
                        </Box>
                    </Col>
                </Row>
            </CardSection>
            <CardSection flex={50} borderRight>
                <Text type="regular" textAlign="center">
                    <b>$2.4k</b> Earned this month
                </Text>
            </CardSection>
            <CardSection flex={50}>
                <Text type="regular" color="success" textAlign="center">
                    <b>+25%</b> more than last month
                </Text>
            </CardSection>
        </Card>
    );
};
