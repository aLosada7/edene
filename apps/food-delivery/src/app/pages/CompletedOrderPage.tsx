import { Button, Container, Text } from '@dana-components';
import { useNavigate } from 'react-router-dom';

export const CompletedOrderPage = () => {
    const navigate = useNavigate();

    return (
        <Container ph={48}>
            <Text size="h3" mb={2}>
                Order Completed
            </Text>

            <Text mb={6}>
                We have received your order. You will have it at home soon!
            </Text>

            <Button onClick={() => navigate('/')}>Start a new order</Button>
        </Container>
    );
};
