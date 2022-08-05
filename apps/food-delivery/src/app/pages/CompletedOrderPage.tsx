import { useNavigate } from 'react-router-dom';

import { Button, Container, Title, Alert } from '@edene/components';

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
