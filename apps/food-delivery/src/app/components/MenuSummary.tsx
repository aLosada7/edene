import React from 'react';

import { Card, CardBody, Text, Title } from '@dana-components';
import { IFoodInfo } from '../context/restaurants';

export const MenuSummary = ({
    food,
    onClick,
}: {
    food: IFoodInfo;
    onClick: (food: IFoodInfo) => void;
}) => (
    <Card onClick={() => onClick(food)}>
        <CardBody>
            <Title>
                <>
                    {food.name}
                    {'  '}
                    {(food.options || []).includes('vegetarian') && `🌱`}
                </>
            </Title>
            <Text size="md" mt={2}>
                {food.description}
            </Text>
            <Text mt={2}>{`${(food.price / 100).toFixed(2)} €`}</Text>
        </CardBody>
    </Card>
);
