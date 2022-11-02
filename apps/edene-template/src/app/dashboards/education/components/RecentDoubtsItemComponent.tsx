import { Button, ListItem, Text } from '@edene/components';
import { grays } from '@edene/foundations';

export const RecentDoubtsItemComponent = ({
    title,
    askedBy,
}: {
    title: string;
    askedBy: string;
}) => (
    <ListItem
        direction="column"
        actions={
            <Button variant="outlined" size="xsmall">
                Open
            </Button>
        }
    >
        <Text size="sm">{title}</Text>
        <Text size="xsm" color={grays[3]}>
            Asked by {askedBy}
        </Text>
    </ListItem>
);
