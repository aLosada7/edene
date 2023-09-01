import { useNavigate } from 'react-router-dom';
import { Button, Container, Heading, Alert, Box } from '@edene/components';

export const CompletedOrderPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Box mb={2}>
                <Heading size="h3">Order Completed</Heading>
            </Box>

            <Alert>We have received your order.</Alert>

            <Button onClick={() => navigate('/')}>Start a new order</Button>
        </Container>
    );
};
