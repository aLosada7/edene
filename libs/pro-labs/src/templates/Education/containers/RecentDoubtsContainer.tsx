import { Card, CardSection, Button, CardHeader, List } from '@edene/components';
import { RecentDoubtsItemComponent } from '../components/RecentDoubtsItemComponent';

export const RecentDoubtsContainer = () => (
    <Card>
        <CardHeader>Recent Doubts</CardHeader>
        <List>
            <RecentDoubtsItemComponent
                title="How does electromagnetism work?"
                askedBy="Jenny Wilson"
            />
            <RecentDoubtsItemComponent
                title="Can't answer Q13 in chapter 3"
                askedBy="Lavanda Jhonson"
            />
        </List>

        <CardSection>
            <Button size="block" variant="outlined">
                View all doubts
            </Button>
        </CardSection>
    </Card>
);
