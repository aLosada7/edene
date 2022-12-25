import { Card, CardSection, CardMedia, Col, Text } from '@edene/components';
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
            css={css`
                margin-bottom: 1.5rem;
            `}
        >
            <Card
                css={css`
                    width: 200px;
                    margin: auto;
                `}
                onClick={() => onSelect('all')}
            >
                <CardMedia src={`/assets/food.png`} alt="All"></CardMedia>
                <CardSection>
                    <Text align="center">All</Text>
                </CardSection>
            </Card>
        </Col>
    );
};
