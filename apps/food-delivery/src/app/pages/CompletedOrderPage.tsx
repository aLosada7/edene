import { Button, Container, Title, Alert } from '@dana-components';
import { useNavigate } from 'react-router-dom';

export const CompletedOrderPage = () => {
    const navigate = useNavigate();

    return (
        <Container ph={48}>
            <Title size="h3" mb={2}>
                Order Completed
            </Title>

            <Alert>We have received your order.</Alert>

            <Button onClick={() => navigate('/')}>Start a new order</Button>
        </Container>
    );
};
