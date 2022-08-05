import { Card, CardBody, CardImage, Col, Text } from '@edene/components';
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
                <CardImage
                    src={`/assets/${category.slug}.png`}
                    alt={`${category.name}`}
                    size="e"
                ></CardImage>
                <CardBody>
                    <Text size="lg" align="center">{`${category.name}`}</Text>
                </CardBody>
            </Card>
        </Col>
    );
};
