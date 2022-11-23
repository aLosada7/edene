import { Row, Heading } from '@edene/components';
import { Fragment } from 'react';

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
        <Fragment>
            <Heading size="h2" mb={6}>
                Food Categories
            </Heading>
            <Row>
                <FoodCategoryAll onSelect={onSelect} />
                {foodCategories}
            </Row>
        </Fragment>
    );
};
