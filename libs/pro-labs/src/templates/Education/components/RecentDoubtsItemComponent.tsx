import { Box, Button, ListItem, Row, Text } from '@edene/components';
import { grays } from '@edene/foundations';

export const RecentDoubtsItemComponent = ({
    title,
    askedBy,
}: {
    title: string;
    askedBy: string;
}) => (
    <ListItem>
        <Row align="space-between-center" noGlutters>
            <Box>
                <Text type="small">{title}</Text>
                <Text type="xsmall" color={grays[3]}>
                    Asked by {askedBy}
                </Text>
            </Box>
            <Button variant="outlined" size="xsmall">
                Open
            </Button>
        </Row>
    </ListItem>
);
