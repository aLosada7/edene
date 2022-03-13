import React from 'react';
import { Row, Text } from '@dana';

import { FoodCategory } from '../components/FoodCategory';
import { FoodCategoryAll } from '../components/FoodCategoryAll';
import {
    IFoodOffer,
    restaurants as foodRestaurants,
} from '../context/restaurants';

export const FoodCategoriesContainer = ({
    onSelect,
}: {
    onSelect: (kind: string) => void;
}) => {
    const foodCategories = foodRestaurants.map((category: IFoodOffer) => (
        <FoodCategory
            key={category.slug}
            category={category}
            onSelect={onSelect}
        />
    ));

    return (
        <>
            <Text size="h4">Food Categories</Text>
            <Row>
                <FoodCategoryAll onSelect={onSelect} />
                <>{foodCategories}</>
            </Row>
        </>
    );
};
