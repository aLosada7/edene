import { Card, CardSection, Button, CardHeader, List } from '@edene/components';

import avatar1 from '../../../../assets/avatars/avatar1.jpeg';
import avatar2 from '../../../../assets/avatars/avatar2.webp';
import avatar3 from '../../../../assets/avatars/avatar3.jpeg';
import avatar4 from '../../../../assets/avatars/avatar4.webp';
import { NewStudentsItemComponent } from '../components/NewStudentsItemComponent';

export const NewStudentsContainer = () => (
    <Card>
        <CardHeader>New Students</CardHeader>
        <List>
            <NewStudentsItemComponent
                avatar={avatar1}
                name="Darrell Steward"
                register="15 minutes ago"
            />
            <NewStudentsItemComponent
                avatar={avatar2}
                name="Katheryn Murphy"
                register="32 minutes ago"
            />
            <NewStudentsItemComponent
                avatar={avatar3}
                name="Jacob Jones"
                register="yesterday"
            />
            <NewStudentsItemComponent
                avatar={avatar4}
                name="Jenny Wilson"
                register="2 days ago"
            />
        </List>
        <CardSection>
            <Button size="block" variant="outlined">
                View all new students
            </Button>
        </CardSection>
    </Card>
);
