import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    Button,
    Col,
    Container,
    Heading,
    Modal,
    ModalBody,
    ModalHeader,
    NumberInput,
    Row,
    Text,
} from '@edene/components';
import { css } from '@emotion/react';

import { MenuCategory } from '../components/MenuCategory';
import { RestaurantRating } from '../components/RestaurantRating';
import useCartContext from '../context/cart/useCartContext';
import { IFoodInfo, IFoodOffer, restaurants } from '../context/restaurants';

export const RestaurantPage = () => {
    const { dispatch } = useCartContext();

    const { restaurantSlug } = useParams();
    const [foodSelected, setFoodSelected] = useState<IFoodInfo | null>(null);
    const [quantity, setQuantity] = useState<number>(0);

    const restaurant = restaurants
        .map((food: IFoodOffer) => food.restaurants)
        .flat()
        .find((restaurant) => restaurant.slug === restaurantSlug);

    if (!restaurant || !restaurant.food) return <div>Error</div>;

    const handleNewCartProduct = () => {
        dispatch({
            type: 'ADD_PRODUCT',
            payload: { quantity, product: foodSelected },
        });
        setFoodSelected(null);
    };

    return (
        <Container>
            <Row>
                <Col direction="column" lg={6}>
                    <Heading type="h3">{restaurant.name}</Heading>
                    <RestaurantRating stars={restaurant.rating} />
                </Col>
                <Col lg={18} direction="column">
                    <Heading type="h3">Menu</Heading>

                    {/* Starters */}
                    {restaurant.food.starters && (
                        <MenuCategory
                            list={restaurant.food.starters}
                            title="Starters"
                            onClick={(food) => setFoodSelected(food)}
                        />
                    )}

                    {/* Bagettes */}
                    {restaurant.food.baguettes && (
                        <MenuCategory
                            list={restaurant.food.baguettes}
                            title="Desserts"
                            onClick={(food) => setFoodSelected(food)}
                        />
                    )}

                    {/* Desserts */}
                    {restaurant.food.desserts && (
                        <MenuCategory
                            list={restaurant.food.desserts}
                            title="Desserts"
                            onClick={(food) => setFoodSelected(food)}
                        />
                    )}

                    <Modal
                        show={foodSelected !== null}
                        onClose={() => setFoodSelected(null)}
                    >
                        <ModalHeader
                            title={foodSelected ? foodSelected.name : 'Fail'}
                            onClose={() => setFoodSelected(null)}
                        />
                        <ModalBody>
                            {foodSelected && foodSelected.price ? (
                                <Container
                                    css={css`
                                        text-align: center;
                                    `}
                                >
                                    <Text type="regular">
                                        {(foodSelected.options || []).includes(
                                            'vegetarian'
                                        ) && `🌱 Vegetarian`}
                                    </Text>

                                    <Text type="regular">
                                        {foodSelected.description}
                                    </Text>

                                    <Text type="xsmall">
                                        {(foodSelected.price / 100).toFixed(2) +
                                            ' €'}
                                    </Text>

                                    <NumberInput
                                        min={1}
                                        step={1}
                                        value={quantity}
                                        onChange={setQuantity}
                                    />

                                    <div>
                                        <Button onClick={handleNewCartProduct}>
                                            <Fragment>
                                                Add to cart (
                                                {(foodSelected
                                                    ? foodSelected.price / 100
                                                    : 0) * quantity}{' '}
                                                €)
                                            </Fragment>
                                        </Button>
                                    </div>
                                </Container>
                            ) : (
                                <div>error</div>
                            )}
                        </ModalBody>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};
