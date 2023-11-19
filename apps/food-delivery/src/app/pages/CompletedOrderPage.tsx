import { useNavigate } from 'react-router-dom';
import { Alert,Button, Container, Heading } from '@edene/components';

export const CompletedOrderPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Heading type="h3">Order Completed</Heading>

            <Alert>We have received your order.</Alert>

            <Button onClick={() => navigate('/')}>Start a new order</Button>
        </Container>
    );
};
