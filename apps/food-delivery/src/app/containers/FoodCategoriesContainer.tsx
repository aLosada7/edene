import { Fragment } from 'react';
import { Heading,Row } from '@edene/components';

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
}) => (
    <Fragment>
        <Heading type="h2">Food Categories</Heading>
        <Row>
            <FoodCategoryAll onSelect={onSelect} />
            {foodRestaurants.map((category: IFoodOffer) => (
                <FoodCategory
                    key={category.slug}
                    category={category}
                    onSelect={onSelect}
                />
            ))}
        </Row>
    </Fragment>
);
