import { Card, CardSection, CardMedia, Col, Text } from '@edene/components';
import { css } from '@emotion/react';

import { IFoodOffer } from '../context/restaurants';

export const FoodCategory = ({
    category,
    onSelect,
}: {
    category: IFoodOffer;
    onSelect: (kind: string) => void;
}) => {
    return (
        <Col
            md={6}
            align="center"
            cssOverrides={css`
                margin-bottom: 1.5rem;
            `}
        >
            <Card
                cssOverrides={css`
                    width: 200px;
                    margin: auto;
                `}
                onClick={() => onSelect(category.slug)}
            >
                <CardMedia
                    src={`/assets/${category.slug}.png`}
                    alt={`${category.name}`}
                    size="e"
                ></CardMedia>
                <CardSection>
                    <Text size="lg" align="center">{`${category.name}`}</Text>
                </CardSection>
            </Card>
        </Col>
    );
};
