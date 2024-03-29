import { Avatar, Box, Button, ListItem, Row, Text } from '@edene/components';
import { grays } from '@edene/foundations';

export const NewStudentsItemComponent = ({
    avatar,
    name,
    register,
}: {
    avatar: string;
    name: string;
    register: string;
}) => (
    <ListItem>
        <Row align="space-between-center" noGlutters>
            <Row noGlutters>
                <Avatar size={40} src={avatar} />
                <Box ml={2}>
                    <Text type="regular">{name}</Text>
                    <Text type="small" color={grays[3]}>
                        Joined {register}
                    </Text>
                </Box>
            </Row>
            <Button variant="outlined" size="xsmall">
                View
            </Button>
        </Row>
    </ListItem>
);
