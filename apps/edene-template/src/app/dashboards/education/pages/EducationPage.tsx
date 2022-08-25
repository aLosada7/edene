import { css } from '@emotion/react';

import {
    Container,
    Row,
    Col,
    Alert,
    Title,
    Card,
    CardSection,
    Text,
    Button,
    Icon,
    Badge,
    CardHeader,
    Avatar,
    Stack,
    List,
    ListItem,
} from '@edene/components';
import { grays } from '@edene/foundations';

import { EducationSummaryContainer } from '../containers/EducationSummaryContainer';
import avatar1 from '../../../../assets/avatars/avatar1.jpeg';
import avatar2 from '../../../../assets/avatars/avatar2.webp';
import avatar3 from '../../../../assets/avatars/avatar3.jpeg';
import avatar4 from '../../../../assets/avatars/avatar4.webp';

const marginLeft = css`
    margin-left: 2px;
`;

const ClassroomSection = () => (
    <>
        <Badge>
            <Icon size="large">videocam</Icon>
        </Badge>
        <Title mt={4} mb={2}>
            Start live class
        </Title>
        <Text size="sm" color={grays[3]} mb={2}>
            Start a live session now. Sends an email automatically to all the
            students scheduling a class at any time.
        </Text>

        <Button size="small">Go live</Button>
        <Button size="small" variant="outline" cssOverrides={marginLeft}>
            Schedule
        </Button>
    </>
);
export const EducationPage = () => {
    return (
        <Container pv={4}>
            <Row>
                <Col md={16} vStack={4}>
                    <EducationSummaryContainer />

                    <Alert actions={<Button size="xsmall">Add</Button>}>
                        Now add any course to your library
                    </Alert>

                    <Row noGlutters>
                        <Title size="h4" mb={2}>
                            Classroom
                        </Title>
                        <Card>
                            <CardSection flex={50} borderRight borderBottom>
                                <ClassroomSection />
                            </CardSection>
                            <CardSection flex={50} borderBottom>
                                <ClassroomSection />
                            </CardSection>
                            <CardSection flex={50} borderRight>
                                <ClassroomSection />
                            </CardSection>
                            <CardSection flex={50}>
                                <ClassroomSection />
                            </CardSection>
                        </Card>
                    </Row>
                </Col>
                <Col md={8} direction="column" vStack={2}>
                    <Card>
                        <CardHeader>New Students</CardHeader>
                        <List>
                            <ListItem
                                borderBottom
                                actions={
                                    <Button variant="outline" size="xsmall">
                                        View
                                    </Button>
                                }
                            >
                                <Avatar size={40} src={avatar1} />
                                <Stack direction="column">
                                    <Text>Darrell Steward</Text>
                                    <Text size="sm" color={grays[3]}>
                                        {' '}
                                        Joined 15 minutes ago
                                    </Text>
                                </Stack>
                            </ListItem>
                            <ListItem
                                borderBottom
                                actions={
                                    <Button variant="outline" size="xsmall">
                                        View
                                    </Button>
                                }
                            >
                                <Avatar size={40} src={avatar2} />
                                <Stack direction="column">
                                    <Text>Katheryn Murphy</Text>
                                    <Text size="sm" color={grays[3]}>
                                        {' '}
                                        Joined 32 minutes ago
                                    </Text>
                                </Stack>
                            </ListItem>
                            <ListItem
                                borderBottom
                                actions={
                                    <Button variant="outline" size="xsmall">
                                        View
                                    </Button>
                                }
                            >
                                <Avatar size={40} src={avatar3} />
                                <Stack direction="column">
                                    <Text>Jacob Jones</Text>
                                    <Text size="sm" color={grays[3]}>
                                        {' '}
                                        Joined yesterday
                                    </Text>
                                </Stack>
                            </ListItem>
                            <ListItem
                                actions={
                                    <Button variant="outline" size="xsmall">
                                        View
                                    </Button>
                                }
                            >
                                <Avatar size={40} src={avatar4} />
                                <Stack direction="column">
                                    <Text>Jenny Wilson</Text>
                                    <Text size="sm" color={grays[3]}>
                                        {' '}
                                        Joined 2 days ago
                                    </Text>
                                </Stack>
                            </ListItem>
                        </List>
                        <CardSection>
                            <Button size="block" variant="outline">
                                View all new students
                            </Button>
                        </CardSection>
                    </Card>
                    <Card>
                        <CardHeader>Recent Doubts</CardHeader>
                        <List>
                            <ListItem
                                direction="column"
                                actions={
                                    <Button variant="outline" size="xsmall">
                                        Open
                                    </Button>
                                }
                            >
                                <Text size="sm">
                                    How does electromagnetism work?
                                </Text>
                                <Text size="xsm" color={grays[3]}>
                                    Asked by Jenny Wilson
                                </Text>
                            </ListItem>
                            <ListItem
                                direction="column"
                                actions={
                                    <Button variant="outline" size="xsmall">
                                        Open
                                    </Button>
                                }
                            >
                                <Text size="sm">
                                    Can't answer Q13 in chapter 3
                                </Text>
                                <Text size="xsm" color={grays[3]}>
                                    Asked by Lavanda Jhonson
                                </Text>
                            </ListItem>
                        </List>

                        <CardSection>
                            <Button size="block" variant="outline">
                                View all doubts
                            </Button>
                        </CardSection>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
