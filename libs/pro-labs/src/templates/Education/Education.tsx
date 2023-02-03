import { Container, Row, Col, Alert, Button } from '@edene/components';

import { EducationSummaryContainer } from './containers/EducationSummaryContainer';
import { ClassroomContainer } from './containers/ClassroomContainer';
import { NewStudentsContainer } from './containers/NewStudentsContainer';
import { RecentDoubtsContainer } from './containers/RecentDoubtsContainer';

const EducationPage = () => {
    return (
        <Container pv={4}>
            <Row>
                <Col md={16} vStack={4}>
                    <EducationSummaryContainer />

                    <Alert actions={<Button size="xsmall">Add</Button>}>
                        Now add any course to your library
                    </Alert>

                    <ClassroomContainer />
                </Col>
                <Col md={8} direction="column" vStack={2}>
                    <NewStudentsContainer />
                    <RecentDoubtsContainer />
                </Col>
            </Row>
        </Container>
    );
};

export default EducationPage;
