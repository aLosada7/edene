import { Row, Col, Text, Title } from '@dana-components';
import { from } from '@dana-foundations';
import { FoodIcon } from '@dana-icons';
import { css } from '@emotion/react';
import useThemeContext from 'libs/dana/src/foundations/theme/useThemeContext';
import React, { ReactElement } from 'react';

import { IFoodInfo } from '../context/restaurants';
import { MenuSummary } from './MenuSummary';

const Circle = ({ children }: { children: ReactElement }) => {
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
                <FoodIcon color="#fff" />
            </Circle>
        </Col>
        <Col md={20} lg={22} direction="column" verticalStack={4}>
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
