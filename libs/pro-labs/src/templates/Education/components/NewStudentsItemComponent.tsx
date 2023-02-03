import {
    Avatar,
    Box,
    Button,
    ListItem,
    Row,
    Stack,
    Text,
} from '@edene/components';
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
    <ListItem
        borderBottom
        actions={
            <Button variant="outlined" size="xsmall">
                View
            </Button>
        }
    >
        <Row>
            <Box>
                <Avatar size={40} src={avatar} />
                <Stack>
                    <Text>{name}</Text>
                    <Text size="small" color={grays[3]}>
                        Joined {register}
                    </Text>
                </Stack>
            </Box>
        </Row>
    </ListItem>
);
