import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Button,
    ButtonGroup,
    Checkbox,
    Container,
    Text,
    Heading,
} from '@edene/components';

import { Cart } from '../components/Cart';
import useCartContext from '../context/cart/useCartContext';
import { IFoodInfo } from '../context/restaurants';

interface ICheckoutErrors {
    [key: string]: string;
}

export const CheckoutPage = () => {
    const [checked, setChecked] = useState(false);
    const [formErrors, setFormErrors] = useState<ICheckoutErrors>({});
    const { products, dispatch } = useCartContext();
    const navigate = useNavigate();

    const handleRemoveCartProduct = (product: IFoodInfo) =>
        dispatch({ type: 'REMOVE_PRODUCT', payload: { product } });

    const isValidOrder = () => {
        let errors = {};
        if (!checked)
            errors = {
                ...errors,
                checked: 'You must agree before submitting.',
            };

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleCompleteOrder = () => {
        if (!isValidOrder()) return;
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
        <Container>
            <Heading size="h3">Checkout</Heading>

            {cart}

            <Checkbox
                label="I accept terms and conditions."
                checked={checked}
                onClick={() => setChecked(!checked)}
                error={formErrors.checked}
            />

            <ButtonGroup size="block">
                <Button
                    variant="outlined"
                    color="dark"
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
