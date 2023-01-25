import {
    Card,
    CardSection,
    Col,
    Row,
    Heading,
    Text,
    Avatar,
    Box,
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
                            <Heading mb={1}>Edene Tuition Center</Heading>
                            <Row noGlutters>
                                <Text weight="bold" color={grays[2]}>
                                    400 students
                                </Text>
                                <Text color="success" ml={1}>
                                    www.edenetuitioncenter.com
                                </Text>
                            </Row>
                        </Row>
                    </Col>
                    <Col md={8} align="horizontal-end">
                        <Box css={totalEarnings}>
                            <Text size="xsmall">$12.2k Total Earnings</Text>
                        </Box>
                    </Col>
                </Row>
            </CardSection>
            <CardSection flex={50} borderRight>
                <Text align="center">
                    <b>$2.4k</b> Earned this month
                </Text>
            </CardSection>
            <CardSection flex={50}>
                <Text color="success" align="center">
                    <b>+25%</b> more than last month
                </Text>
            </CardSection>
        </Card>
    );
};
