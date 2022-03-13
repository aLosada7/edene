import React from 'react';
import { Container, Title } from '@dana';

import { RestaurantSummary } from '../components/RestaurantSummary';
import {
    IFoodOffer,
    IRestaurant,
    restaurants as foodRestaurants,
} from '../context/restaurants';

export const RestaurantListContainer = ({ foodKind }: { foodKind: string }) => {
    const selectedFoodName = `${foodKind
        .charAt(0)
        .toUpperCase()}${foodKind.slice(1)}`;

    const selectedFoodRestaurants: IRestaurant[] =
        foodRestaurants.find((food: IFoodOffer) => food.slug === foodKind)
            ?.restaurants ||
        foodRestaurants.map((food: IFoodOffer) => food.restaurants).flat();

    return (
        <>
            <Title size="h4" mb={4}>
                <span>{selectedFoodName} Restaurants</span>
            </Title>
            <Container ph={48}>
                {selectedFoodRestaurants.map((restaurant: IRestaurant) => (
                    <RestaurantSummary restaurant={restaurant} />
                ))}
            </Container>
        </>
    );
};
