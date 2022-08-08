import { Card, CardSection, Text } from '@edene/components';
import { Fragment } from 'react';
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
            <Text weight="bold">
                <Fragment>
                    {food.name}
                    {'  '}
                    {(food.options || []).includes('vegetarian') && `🌱`}
                </Fragment>
            </Text>
            <Text size="sm" mt={2}>
                {food.description}
            </Text>
            <Text size="lg" mt={2}>{`${(food.price / 100).toFixed(2)} €`}</Text>
        </CardSection>
    </Card>
);
