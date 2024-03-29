import { Col, Heading, Icon,Row } from '@edene/components';
import { from, useTheme } from '@edene/foundations';
import { css } from '@emotion/react';

import { IFoodInfo } from '../context/restaurants';
import { MenuSummary } from './MenuSummary';

const Circle = ({ children }: { children: React.ReactElement }) => {
    const { theme } = useTheme();

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
    title,
    list = [],
    onClick,
}: {
    title: string;
    list: IFoodInfo[];
    onClick: (food: IFoodInfo) => void;
}) => (
    <Row
        py={3}
        css={css`
            position: relative;
        `}
    >
        <Col
            md={4}
            lg={2}
            css={css`
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
        <Col md={20} lg={22} direction="column">
            <Heading type="h4">{title}</Heading>
            <Row gap={2}>
                {list.map((food: IFoodInfo, index: number) => (
                    <MenuSummary
                        key={index}
                        food={food}
                        onClick={() => onClick(food)}
                    />
                ))}
            </Row>
        </Col>
    </Row>
);
