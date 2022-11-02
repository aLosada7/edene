import { Avatar, Button, ListItem, Stack, Text } from '@edene/components';
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
        <Avatar size={40} src={avatar} />
        <Stack>
            <Text>{name}</Text>
            <Text size="sm" color={grays[3]}>
                {' '}
                Joined {register}
            </Text>
        </Stack>
    </ListItem>
);
