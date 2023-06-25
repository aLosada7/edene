import { Fragment } from 'react';

import { Box, Container, Heading } from '@edene/components';

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
        <Fragment>
            <Box mb={6}>
                <Heading size="h2">
                    <span>{selectedFoodName} Restaurants</span>
                </Heading>
            </Box>
            <Container ph={48}>
                {selectedFoodRestaurants.map((restaurant: IRestaurant) => (
                    <RestaurantSummary restaurant={restaurant} />
                ))}
            </Container>
        </Fragment>
    );
};
