import { Icon, Text, Group } from '@edene/components';
import { grays } from '@edene/foundations';

const Note = () => (
    <Group>
        <Icon variant="outlined" size="large">
            note_alt
        </Icon>

        <div>
            <Text>The client called and said their fence fell over</Text>
            <Text size="xsm" color={grays[2]}>
                System · April 04, 2018 7:13am
            </Text>
        </div>
    </Group>
);

export default Note;
