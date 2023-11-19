import { Fragment } from 'react';
import { Card, CardSection, Text } from '@edene/components';

import { IFoodInfo } from '../context/restaurants';

export const MenuSummary = ({
    food,
    onClick,
}: {
    food: IFoodInfo;
    onClick: (food: IFoodInfo) => void;
}) => (
    <Card onClick={() => onClick(food)}>
        <CardSection>
            <Text type="regular" weight="bold">
                <Fragment>
                    {food.name}
                    {'  '}
                    {(food.options || []).includes('vegetarian') && `🌱`}
                </Fragment>
            </Text>
            <Text type="small">{food.description}</Text>
            <Text type="regular">{`${(food.price / 100).toFixed(2)} €`}</Text>
        </CardSection>
    </Card>
);
