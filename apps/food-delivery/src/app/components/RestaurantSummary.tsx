import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

import {
    Card,
    CardSection,
    Col,
    Row,
    Image,
    Text,
    Icon,
    Box,
} from '@edene/components';

import { IRestaurant } from '../context/restaurants';
import { RestaurantRating } from './RestaurantRating';
import { grays } from '@edene/foundations';

export const RestaurantSummary = ({
    restaurant,
}: {
    restaurant: IRestaurant;
}) => (
    <Card>
        <NavLink to={restaurant.slug}>
            <CardSection>
                <Row direction="row">
                    <Col md={4}>
                        <Image
                            size="e"
                            src={`/assets/${restaurant.slug}.png`}
                            alt={restaurant.name}
                            css={css`
                                object-fit: contain;
                            `}
                        />
                    </Col>
                    <Col md={8} direction="column">
                        <Box>
                            <Text size="regular" weight="bold" color={grays[0]}>
                                {restaurant.name}
                            </Text>
                        </Box>
                        <Text size="small" color={grays[2]}>
                            {restaurant.kind}
                        </Text>
                        <RestaurantRating stars={restaurant.rating} />
                    </Col>
                    <Col md={12} direction="column">
                        <Row gap={1}>
                            <Icon mr={2}>confirmation_number</Icon>
                            <Text size="xsmall" color={grays[0]}>
                                Entrega desde 1.90€ sin pedido mínimo
                            </Text>
                        </Row>
                        <Row gap={1}>
                            <Icon mr={2}>schedule</Icon>
                            <Text size="xsmall" color="success">
                                25 - 30 min.
                            </Text>
                        </Row>
                    </Col>
                </Row>
            </CardSection>
        </NavLink>
    </Card>
);
