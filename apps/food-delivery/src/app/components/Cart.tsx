import { Fragment } from 'react';

import { Row, Col, Text, ActionButton, Icon } from '@edene/components';

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
    <Fragment>
        {products.map((cartProduct) => (
            <Row key={cartProduct.product.id}>
                <Col sm={18} direction="column">
                    <Text size="xsm">
                        {(cartProduct.product.price / 100).toFixed(2) + ' €'}
                    </Text>
                    <Text size="lg">{cartProduct.product.name}</Text>
                    <Text size="sm">
                        <Fragment>Qty: {cartProduct.quantity}</Fragment>
                    </Text>
                </Col>
                <Col sm={6} align="horizontal-end">
                    <ActionButton
                        onClick={() => onRemoveCartProduct(cartProduct.product)}
                    >
                        <Icon>close</Icon>
                    </ActionButton>
                </Col>
            </Row>
        ))}
        <div>
            <Text>
                <Fragment>
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
                </Fragment>
            </Text>
        </div>
    </Fragment>
);
