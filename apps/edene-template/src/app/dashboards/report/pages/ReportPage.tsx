import { Button, Container, Heading, Text } from '@edene/components';
import { grays } from '@edene/foundations';

const ReportPage = () => {
    return (
        <Container pv={4}>
            <Heading
                size="h3"
                actions={
                    <>
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
                    </>
                }
            >
                Welcome back, Frenkie
            </Heading>
            <Text color={grays[3]}>
                Track, manage and forecast your customers and orders
            </Text>
        </Container>
    );
};

export default ReportPage;
