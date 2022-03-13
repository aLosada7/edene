import {
    Container,
    Row,
    Col,
    Text,
    Modal,
    Button,
    NumberInput,
    Title,
    ModalContent,
    ModalFooter,
} from '@dana-components';
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MenuCategory } from '../components/MenuCategory';
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
                <Col md={6}>{restaurant.name}</Col>
                <Col md={18} direction="column">
                    <Title size="h3">Menu</Title>

                    {/* Starters */}
                    {restaurant.food.starters && (
                        <MenuCategory
                            category={restaurant.food.starters}
                            label="Starters"
                            onClick={(food) => setFoodSelected(food)}
                        />
                    )}

                    {/* Bagettes */}
                    {restaurant.food.baguettes && (
                        <MenuCategory
                            category={restaurant.food.baguettes}
                            label="Desserts"
                            onClick={(food) => setFoodSelected(food)}
                        />
                    )}

                    {/* Desserts */}
                    {restaurant.food.desserts && (
                        <MenuCategory
                            category={restaurant.food.desserts}
                            label="Desserts"
                            onClick={(food) => setFoodSelected(food)}
                        />
                    )}

                    <Modal
                        opened={foodSelected !== null}
                        title={foodSelected ? foodSelected.name : 'Fail'}
                        onClose={() => setFoodSelected(null)}
                    >
                        <ModalContent>
                            {foodSelected && foodSelected.price ? (
                                <Container
                                    cssOverrides={css`
                                        text-align: center;
                                    `}
                                >
                                    <Text size="md">
                                        <>
                                            {(
                                                foodSelected.options || []
                                            ).includes('vegetarian') &&
                                                `🌱 Vegetarian`}
                                        </>
                                    </Text>

                                    <Text>{foodSelected.description}</Text>

                                    <Text size="xsm">
                                        {(foodSelected.price / 100).toFixed(2) +
                                            ' €'}
                                    </Text>

                                    <NumberInput
                                        min={1}
                                        value={quantity}
                                        onChange={setQuantity}
                                    />
                                </Container>
                            ) : (
                                <div>error</div>
                            )}
                        </ModalContent>
                        <ModalFooter
                            cssOverrides={css`
                                justify-content: center;
                            `}
                        >
                            <Button onClick={handleNewCartProduct}>
                                <>
                                    Add to cart (
                                    {(foodSelected
                                        ? foodSelected.price / 100
                                        : 0) * quantity}{' '}
                                    €)
                                </>
                            </Button>
                        </ModalFooter>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};
