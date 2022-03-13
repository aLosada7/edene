import { DanaTheme } from '@dana-theme';
import {
    Text,
    Card,
    CardBody,
    Container,
    Row,
    Col,
    Title,
} from '@dana-components';
import { FoodIcon } from '@dana-icons';
import React, { ReactElement } from 'react';
import { css } from '@emotion/react';
import useThemeContext from 'libs/dana/src/foundations/theme/useThemeContext';
import { from } from '@dana-foundations';

export default {
    title: 'DanaLabs',
    decorators: [
        (Story: any) => (
            <DanaTheme>
                <Story />
            </DanaTheme>
        ),
    ],
};

const Circle = ({ children }: { children: ReactElement }) => {
    const { theme } = useThemeContext();

    return (
        <div
            css={css`
                width: 50px;
                height: 50px;
                background-color: ${theme.palette.accent.background};
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

export const RestaurantMenu = () => (
    <Container ph={32}>
        <Row
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
                    Starters
                </Title>
                <Card>
                    <CardBody>
                        <Text weight="bold">A food name</Text>
                        <Text size="md" mt={2}>
                            A food description
                        </Text>
                        <Text size="lg" mt={2}>{`${(1000 / 100).toFixed(
                            2
                        )} €`}</Text>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Text weight="bold">
                            <>
                                A vegetarian food name{'  '}
                                {`🌱`}
                            </>
                        </Text>
                        <Text size="sm" mt={2}>
                            A vegetarian food description
                        </Text>
                        <Text size="lg" mt={1}>{`${(1000 / 100).toFixed(
                            2
                        )} €`}</Text>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
);
