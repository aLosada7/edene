import { Button, Container, Title, Text } from '@edene/components';
import { grays } from '@edene/foundations';

const ReportPage = () => {
    return (
        <Container pv={4}>
            <Title
                size="h3"
                actions={
                    <>
                        <Button
                            variant="outline"
                            size="small"
                            iconLeft="cloud_download"
                        >
                            Import
                        </Button>
                        <Button size="small" iconLeft="add">
                            Add
                        </Button>
                    </>
                }
            >
                Welcome back, Frenkie
            </Title>
            <Text size="lg" color={grays[3]}>
                Track, manage and forecast your customers and orders
            </Text>
        </Container>
    );
};

export default ReportPage;
