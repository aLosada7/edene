import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

import { Card, CardBody, Col, Row, Image, Text, Icon } from '@edene/components';

import { IRestaurant } from '../context/restaurants';
import { RestaurantRating } from './RestaurantRating';

export const RestaurantSummary = ({
    restaurant,
}: {
    restaurant: IRestaurant;
}) => (
    <Card>
        <NavLink to={restaurant.slug}>
            <CardBody>
                <Row direction="row">
                    <Col md={4}>
                        <Image
                            size="e"
                            src={`/assets/${restaurant.slug}.png`}
                            alt={restaurant.name}
                            cssOverrides={css`
                                object-fit: contain;
                            `}
                        />
                    </Col>
                    <Col md={8} direction="column">
                        <Text size="md" weight="bold" mt={2}>
                            {restaurant.name}
                        </Text>
                        <Text size="sm">{restaurant.kind}</Text>
                        <RestaurantRating stars={restaurant.rating} />
                    </Col>
                    <Col md={12} direction="column">
                        <Text
                            size="xsm"
                            icon={<Icon>confirmation_number</Icon>}
                            mt={4}
                        >
                            Entrega desde 1.90€ sin pedido mínimo
                        </Text>
                        <Text
                            size="xsm"
                            color="success"
                            icon={<Icon>schedule</Icon>}
                        >
                            25 - 30 min.
                        </Text>
                    </Col>
                </Row>
            </CardBody>
        </NavLink>
    </Card>
);
