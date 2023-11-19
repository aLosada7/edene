import { Button, Container, Heading, Row, Text } from '@edene/components';
import { grays } from '@edene/foundations';

import LineChart from '../../components/simple/Chart';

const Report = () => (
    <Container>
        <Row align="space-between-center" noGlutters gap={6}>
            <Heading type="h3">Welcome back, Frenkie</Heading>
            <Row gap={1}>
                <Button variant="outlined" size="small" icon="cloud_download">
                    Import
                </Button>
                <Button size="small" icon="add">
                    Add
                </Button>
            </Row>
        </Row>
        <Text type="regular" color={grays[3]}>
            Track, manage and forecast your customers and orders
        </Text>
        <Row py={2} noGlutters>
            <LineChart />
        </Row>
    </Container>
);

export default Report;
