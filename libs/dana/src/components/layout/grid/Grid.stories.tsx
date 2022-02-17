import React from 'react';
import { Container, ContainerProps } from './Container';
import { asChromaticStory } from '../../../../lib/story-intents';
import type { Story } from '../../../../lib/storybook-emotion-10-fixes';
import { Col } from './Col';
import { Row } from './Row';

export default {
    title: 'Components/Layout/Grid',
    component: Container,
};

export const ThreeCols: Story<ContainerProps> = (args: ContainerProps) => (
    <Container>
        <Row>
            <Col sm={24} lg={8}>
                <p>One of three columns</p>
            </Col>
            <Col sm={24} lg={8}>
                <p>One of three columns</p>
            </Col>
            <Col sm={24} lg={8}>
                <p>One of three columns</p>
            </Col>
        </Row>
    </Container>
);
asChromaticStory(ThreeCols);

// *****************************************************************************

export const TwoAndThreeCols: Story<ContainerProps> = (
    args: ContainerProps
) => (
    <Container>
        <Row>
            <Col md={12}>
                <p>One of two columns</p>
            </Col>
            <Col md={12}>
                <p>One of two columns</p>
            </Col>
        </Row>
        <Row>
            <Col lg={8}>
                <p>One of three columns</p>
            </Col>
            <Col lg={8}>
                <p>One of three columns</p>
            </Col>
            <Col lg={8}>
                <p>One of three columns</p>
            </Col>
        </Row>
    </Container>
);
asChromaticStory(TwoAndThreeCols);

export const FourCols: Story<ContainerProps> = (args: ContainerProps) => (
    <Container>
        <Row>
            <Col lg={12}>
                <p>One of two columns</p>
            </Col>
            <Col lg={12}>
                <p>One of two columns</p>
            </Col>
            <Col lg={12}>
                <p>One of two columns</p>
            </Col>
            <Col lg={12}>
                <p>One of two columns</p>
            </Col>
        </Row>
    </Container>
);
asChromaticStory(TwoAndThreeCols);

export const RowsAndColumns: Story<ContainerProps> = (args: ContainerProps) => (
    <Container pv={16}>
        <Row>
            <Col md={12}>
                <p>
                    Pero que pasa niño un texto con un poco de longitud dale
                    dale dale dale dale
                </p>
            </Col>
            <Col md={12} direction="column">
                <Container>
                    <Row>
                        <Col md={12}>
                            <p>
                                Pero que pasa niño un texto con un poco de
                                longitud dale dale dale dale dale
                            </p>
                        </Col>
                        <Col md={12}>
                            <p>texto</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <p>Photo</p>
                        </Col>
                        <Col md={12}>
                            <p>texto</p>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>
);
asChromaticStory(TwoAndThreeCols);

export const FourColsWithoutContainer: Story<ContainerProps> = () => (
    <Row>
        <Col md={12}>
            <p>One of two columns</p>
        </Col>
        <Col md={12}>
            <p>One of two columns</p>
        </Col>
        <Col md={12}>
            <p>One of two columns</p>
        </Col>
        <Col md={12}>
            <p>One of two columns</p>
        </Col>
    </Row>
);
asChromaticStory(FourColsWithoutContainer);
