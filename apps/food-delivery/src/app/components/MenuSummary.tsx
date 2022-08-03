import { Card, CardBody, Text } from '@edene/components';
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
            <Text weight="bold">
                <>
                    {food.name}
                    {'  '}
                    {(food.options || []).includes('vegetarian') && `🌱`}
                </>
            </Text>
            <Text size="sm" mt={2}>
                {food.description}
            </Text>
            <Text size="lg" mt={2}>{`${(food.price / 100).toFixed(2)} €`}</Text>
        </CardBody>
    </Card>
);
