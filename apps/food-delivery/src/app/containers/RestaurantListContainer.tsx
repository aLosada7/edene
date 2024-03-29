import { Fragment } from 'react';
import { Container, Heading } from '@edene/components';

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
            <Heading type="h2">
                <span>{selectedFoodName} Restaurants</span>
            </Heading>
            <Container>
                {selectedFoodRestaurants.map((restaurant: IRestaurant) => (
                    <RestaurantSummary restaurant={restaurant} />
                ))}
            </Container>
        </Fragment>
    );
};
