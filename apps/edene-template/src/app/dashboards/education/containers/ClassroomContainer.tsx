import { Row, Title, Card } from '@edene/components';
import { ClassroomSectionComponent } from '../components/ClassroomSectionComponent';

export const ClassroomContainer = () => (
    <Row noGlutters>
        <Title size="h4" mb={2}>
            Classroom
        </Title>
        <Card>
            <ClassroomSectionComponent
                borderRight
                borderBottom
                icon="videocam"
                iconColor="#fa5252"
                badgeColor="#EDC6BD"
                title="Start live class"
                description="Start a live session now. Sends an email automatically to
                    all the students scheduling a class at any time."
                mainAction="Go live"
                secondaryAction="Schedule"
            />
            <ClassroomSectionComponent
                borderBottom
                icon="task"
                iconColor="#7F3E98"
                badgeColor="#B283BE"
                title="Mark Attendance"
                description="It is not always possible to go to class. But this has not
                to be an habit."
                mainAction="Check"
                secondaryAction="Mark Leaves"
            />
            <ClassroomSectionComponent
                borderRight
                icon="menu_book"
                iconColor="#007bff"
                badgeColor="#BDD1ED"
                title="Class homework"
                description="Handle your students homework and send them tasks."
                mainAction="Quizes"
                secondaryAction="Worksheets"
            />
            <ClassroomSectionComponent
                icon="note"
                iconColor="#E6B325"
                badgeColor="#E6D2AA"
                title="Clear doubts"
                description="Helpful before an exam or a class challenge. Take some time
                to get the best from your students."
                mainAction="Recent"
                secondaryAction="All doubts"
            />
        </Card>
    </Row>
);
