import { Icon, Text, Group, Row } from '@edene/components';
import { grays } from '@edene/foundations';

const Note = () => (
    <Row gap={4}>
        <Icon variant="outlined" size="large">
            note_alt
        </Icon>

        <div>
            <Text>The client called and said their fence fell over</Text>
            <Text size="xsmall" color={grays[2]}>
                System · April 04, 2018 7:13am
            </Text>
        </div>
    </Row>
);

export default Note;
