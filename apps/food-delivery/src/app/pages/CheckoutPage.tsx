import { Button, ButtonGroup, Container, Text, Title } from '@dana-components';
import { useNavigate } from 'react-router-dom';
import { Cart } from '../components/Cart';
import useCartContext from '../context/cart/useCartContext';
import { IFoodInfo } from '../context/restaurants';

export const CheckoutPage = () => {
    const { products, dispatch } = useCartContext();
    const navigate = useNavigate();

    const handleRemoveCartProduct = (product: IFoodInfo) =>
        dispatch({ type: 'REMOVE_PRODUCT', payload: { product } });

    const handleCompleteOrder = () => {
        dispatch({ type: 'CLEAR_CART' });
        navigate('/order-completed');
    };

    const cart =
        products.length > 0 ? (
            <Cart
                products={products}
                onRemoveCartProduct={handleRemoveCartProduct}
            />
        ) : (
            <Text>Your cart is empty</Text>
        );

    return (
        <Container ph={48}>
            <Title size="h3">Checkout</Title>

            {cart}
            <ButtonGroup size="block">
                <Button
                    color="dark"
                    variant="outline"
                    onClick={() => navigate(-1)}
                >
                    Back
                </Button>
                <Button
                    color="success"
                    disabled={products.length === 0}
                    onClick={handleCompleteOrder}
                >
                    ORDER NOW!
                </Button>
            </ButtonGroup>
        </Container>
    );
};
