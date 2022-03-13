import React from 'react';

import { Row, Col, Text, ActionButton, CloseIcon } from '@dana';
import { IFoodInfo } from '../context/restaurants';

export const Cart = ({
    products,
    onRemoveCartProduct,
}: {
    products: {
        quantity: number;
        product: IFoodInfo;
    }[];
    onRemoveCartProduct: (product: IFoodInfo) => void;
}) => (
    <>
        {products.map((cartProduct) => (
            <Row key={cartProduct.product.id}>
                <Col sm={18} direction="column">
                    <Text size="xsm">
                        {(cartProduct.product.price / 100).toFixed(2) + ' €'}
                    </Text>
                    <Text size="lg">{cartProduct.product.name}</Text>
                    <Text size="sm">
                        <>Qty: {cartProduct.quantity}</>
                    </Text>
                </Col>
                <Col sm={6} align="horizontal-end">
                    <ActionButton
                        onClick={() => onRemoveCartProduct(cartProduct.product)}
                    >
                        <CloseIcon />
                    </ActionButton>
                </Col>
            </Row>
        ))}
        <div>
            <Text>
                <>
                    Subtotal:{' '}
                    {(
                        products.reduce(
                            (acc, cartProduct) =>
                                acc +
                                cartProduct.quantity *
                                    cartProduct.product.price,
                            0
                        ) / 100
                    ).toFixed(2) + ' €'}
                </>
            </Text>
        </div>
    </>
);
