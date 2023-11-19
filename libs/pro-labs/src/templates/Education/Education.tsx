import { Alert, Button,Col, Container, Row } from '@edene/components';

import { ClassroomContainer } from './containers/ClassroomContainer';
import { EducationSummaryContainer } from './containers/EducationSummaryContainer';
import { NewStudentsContainer } from './containers/NewStudentsContainer';
import { RecentDoubtsContainer } from './containers/RecentDoubtsContainer';

const EducationPage = () => (
    <Container>
        <Row>
            <Col direction="column" md={16} gap={4}>
                <EducationSummaryContainer />

                <Alert actions={<Button size="xsmall">Add</Button>}>
                    Now add any course to your library
                </Alert>

                <ClassroomContainer />
            </Col>
            <Col md={8} direction="column" gap={8}>
                <NewStudentsContainer />
                <RecentDoubtsContainer />
            </Col>
        </Row>
    </Container>
);

export default EducationPage;
