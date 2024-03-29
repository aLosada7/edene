import { Fragment } from 'react';
import { ActionButton, Col, Icon,Row, Text } from '@edene/components';

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
                    <Text type="xsmall">
                        {(cartProduct.product.price / 100).toFixed(2) + ' €'}
                    </Text>
                    <Text type="regular">{cartProduct.product.name}</Text>
                    <Text type="small">
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
            <Text type="regular">
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
