import { css } from '@emotion/react';

import { Row, Col, Title, Icon } from '@edene/components';
import { from, useThemeContext } from '@edene/foundations';

import { IFoodInfo } from '../context/restaurants';
import { MenuSummary } from './MenuSummary';

const Circle = ({ children }: { children: React.ReactElement }) => {
    const { theme } = useThemeContext();

    return (
        <div
            css={css`
                width: 50px;
                height: 50px;
                background-color: ${theme.black};
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 40px;
            `}
        >
            {children}
        </div>
    );
};

export const MenuCategory = ({
    label,
    category,
    onClick,
}: {
    label: string;
    category: IFoodInfo[];
    onClick: (food: IFoodInfo) => void;
}) => (
    <Row
        py={3}
        cssOverrides={css`
            position: relative;
        `}
    >
        <Col
            md={4}
            lg={2}
            cssOverrides={css`
                display: none;
                ${from.phablet} {
                    display: block;
                } ;
            `}
        >
            <Circle>
                <Icon color="#fff">restaurant</Icon>
            </Circle>
        </Col>
        <Col md={20} lg={22} direction="column" vStack={4}>
            <Title size="h4" mt={4} mb={4}>
                {label}
            </Title>
            {(category || []).map((food: IFoodInfo, index: number) => (
                <MenuSummary
                    key={index}
                    food={food}
                    onClick={() => onClick(food)}
                />
            ))}
        </Col>
    </Row>
);
