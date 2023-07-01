import { Row, Heading, Box } from '@edene/components';
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
}) => (
    <Fragment>
        <Box mb={6}>
            <Heading size="h2">Food Categories</Heading>
        </Box>
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
