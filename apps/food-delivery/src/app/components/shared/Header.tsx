import {
    Header as DanaHeader,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    HeaderPanel,
    Container,
    Row,
    Col,
    Text,
    Button,
} from '@dana';

import { CartIcon } from '@dana-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCartContext from '../../context/cart/useCartContext';
import { IFoodInfo } from '../../context/restaurants';
import { Cart } from '../Cart';

export const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const { products, dispatch } = useCartContext();
    const navigate = useNavigate();

    const toggleRightPanel = () => {
        setExpanded(!expanded);
    };

    const handleRemoveCartProduct = (product: IFoodInfo) =>
        dispatch({ type: 'REMOVE_PRODUCT', payload: { product } });

    return (
        <DanaHeader isFixed aria-label="Food Delivery">
            <HeaderName href="#">Food Delivery</HeaderName>
            <HeaderGlobalBar>
                <HeaderGlobalAction
                    aria-label="App"
                    tooltipAlignment="end"
                    badge={products.length}
                    onClick={toggleRightPanel}
                >
                    <CartIcon />
                </HeaderGlobalAction>
            </HeaderGlobalBar>
            <HeaderPanel
                aria-label="Header Panel"
                expanded={expanded}
                backgroundColor="#eee"
                textColor="#000"
            >
                <Container>
                    <Cart
                        products={products}
                        onRemoveCartProduct={handleRemoveCartProduct}
                    />
                    <Button
                        size="block"
                        onClick={() => {
                            toggleRightPanel();
                            navigate('/checkout');
                        }}
                    >
                        Checkout
                    </Button>
                </Container>
            </HeaderPanel>
        </DanaHeader>
    );
};
