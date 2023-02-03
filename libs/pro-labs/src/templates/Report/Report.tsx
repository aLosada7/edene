import {
    Button,
    Container,
    Group,
    Heading,
    Row,
    Text,
} from '@edene/components';
import { grays, useTheme } from '@edene/foundations';
import LineChart from '../../components/simple/Chart';

const Report = () => {
    const { theme } = useTheme();

    return (
        <Container pv={4}>
            <Row align="space-between-center" noGlutters>
                <Heading size="h3">Welcome back, Frenkie</Heading>
                <Group>
                    <Button
                        variant="outlined"
                        size="small"
                        icon="cloud_download"
                    >
                        Import
                    </Button>
                    <Button size="small" icon="add">
                        Add
                    </Button>
                </Group>
            </Row>
            <Text color={grays[3]}>
                Track, manage and forecast your customers and orders
            </Text>
            <Row py={2} noGlutters>
                <LineChart theme={theme} />
            </Row>
        </Container>
    );
};

export default Report;
