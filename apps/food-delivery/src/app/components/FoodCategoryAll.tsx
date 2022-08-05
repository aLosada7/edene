import { Card, CardBody, CardImage, Col, Text } from '@edene/components';
import { css } from '@emotion/react';

export const FoodCategoryAll = ({
    onSelect,
}: {
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
                onClick={() => onSelect('all')}
            >
                <CardImage
                    src={`/assets/food.png`}
                    alt="All"
                    size="e"
                ></CardImage>
                <CardBody>
                    <Text size="lg" align="center">
                        All
                    </Text>
                </CardBody>
            </Card>
        </Col>
    );
};
