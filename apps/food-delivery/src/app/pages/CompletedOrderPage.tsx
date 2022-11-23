import { useNavigate } from 'react-router-dom';

import { Button, Container, Heading, Alert } from '@edene/components';

export const CompletedOrderPage = () => {
    const navigate = useNavigate();

    return (
        <Container ph={48}>
            <Heading size="h3" mb={2}>
                Order Completed
            </Heading>

            <Alert>We have received your order.</Alert>

            <Button onClick={() => navigate('/')}>Start a new order</Button>
        </Container>
    );
};
