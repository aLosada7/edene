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
                    padding: 0;
                `}
                onClick={() => onSelect('all')}
            >
                <CardMedia src={`/assets/food.png`} alt="All"></CardMedia>
                <CardSection>
                    <Text type="regular" textAlign="center">
                        All
                    </Text>
                </CardSection>
            </Card>
        </Col>
    );
};
