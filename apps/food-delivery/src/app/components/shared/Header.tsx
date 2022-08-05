import { css } from '@emotion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Header as EdeneHeader,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    HeaderPanel,
    Container,
    Button,
} from '@edene/components';
import { Icon } from '@edene/foundations';

import useCartContext from '../../context/cart/useCartContext';
import { IFoodInfo } from '../../context/restaurants';
import { Cart } from '../Cart';

const userHeading = css`
    display: flex;
    align-items: center;
    color: #f4f4f4;
`;

export const Header = ({ name }: { name?: string }) => {
    const [expanded, setExpanded] = useState(false);

    const { products, dispatch } = useCartContext();
    const navigate = useNavigate();

    const toggleRightPanel = () => {
        setExpanded(!expanded);
    };

    const handleRemoveCartProduct = (product: IFoodInfo) =>
        dispatch({ type: 'REMOVE_PRODUCT', payload: { product } });

    return (
        <EdeneHeader isFixed aria-label="Food Delivery">
            <HeaderName href="#">Food Delivery</HeaderName>
            <HeaderGlobalBar>
                {name && (
                    <span role="heading" aria-level={1} css={userHeading}>
                        {name}
                    </span>
                )}
                <HeaderGlobalAction
                    aria-label="App"
                    badge={products.length}
                    onClick={toggleRightPanel}
                >
                    <Icon>shopping_cart</Icon>
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
        </EdeneHeader>
    );
};
