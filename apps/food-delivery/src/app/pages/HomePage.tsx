import { useState } from 'react';
import { Container } from '@edene/components';

import { FoodCategoriesContainer } from '../containers/FoodCategoriesContainer';
import { RestaurantListContainer } from '../containers/RestaurantListContainer';

export const HomePage = () => {
    const [foodKindSelected, setFoodKindSelected] = useState('all');
    return (
        <Container>
            <FoodCategoriesContainer onSelect={setFoodKindSelected} />
            <RestaurantListContainer foodKind={foodKindSelected} />
        </Container>
    );
};
