import { css } from '@emotion/react';
import { Fragment } from 'react';

import { Container, ContainerProps } from './Container';
import { asChromaticStory } from '../lib/story-intents';
import type { Story } from '../lib/storybook-emotion-10-fixes';
import { Col } from './Col';
import { Row } from './Row';

export default {
    title: 'Components/Grid',
    component: Container,
};

const col = css`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    background-color: rgba(86, 61, 124, 0.15);
    border: 1px solid rgba(86, 61, 124, 0.2);
`;

export const ThreeCols: Story<ContainerProps> = () => (
    <Container>
        <Row>
            <Col cssOverrides={col} sm={24} lg={8}>
                One of three columns
            </Col>
            <Col cssOverrides={col} sm={24} lg={8}>
                One of three columns
            </Col>
            <Col cssOverrides={col} sm={24} lg={8}>
                One of three columns
            </Col>
        </Row>
    </Container>
);
asChromaticStory(ThreeCols);

// *****************************************************************************

export const TwoAndThreeCols: Story<ContainerProps> = () => (
    <Container>
        <Row>
            <Col cssOverrides={col} md={12}>
                One of two columns
            </Col>
            <Col cssOverrides={col} md={12}>
                One of two columns
            </Col>
        </Row>
        <Row>
            <Col cssOverrides={col} lg={8}>
                One of three columns
            </Col>
            <Col cssOverrides={col} lg={8}>
                One of three columns
            </Col>
            <Col cssOverrides={col} lg={8}>
                One of three columns
            </Col>
        </Row>
    </Container>
);
asChromaticStory(TwoAndThreeCols);

export const FourCols: Story<ContainerProps> = (args: ContainerProps) => (
    <Container>
        <Row>
            <Col cssOverrides={col} lg={12}>
                One of two columns
            </Col>
            <Col cssOverrides={col} lg={12}>
                One of two columns
            </Col>
            <Col cssOverrides={col} lg={12}>
                One of two columns
            </Col>
            <Col cssOverrides={col} lg={12}>
                One of two columns
            </Col>
        </Row>
    </Container>
);
asChromaticStory(TwoAndThreeCols);

export const RowsAndColumns: Story<ContainerProps> = (args: ContainerProps) => (
    <Container>
        <Row>
            <Col cssOverrides={col} md={12}>
                One of two columns
            </Col>
            <Col md={12} direction="column">
                <Fragment>
                    <Row>
                        <Col cssOverrides={col} md={12}>
                            One of two columns
                        </Col>
                        <Col cssOverrides={col} md={12}>
                            One of two columns
                        </Col>
                    </Row>
                    <Row>
                        <Col cssOverrides={col} md={12}>
                            One of two columns
                        </Col>
                        <Col cssOverrides={col} md={12}>
                            One of two columns
                        </Col>
                    </Row>
                </Fragment>
            </Col>
        </Row>
    </Container>
);
asChromaticStory(TwoAndThreeCols);

export const FourColsWithoutContainer: Story<ContainerProps> = () => (
    <Row>
        <Col cssOverrides={col} md={12}>
            One of two columns
        </Col>
        <Col cssOverrides={col} md={12}>
            One of two columns
        </Col>
        <Col cssOverrides={col} md={12}>
            One of two columns
        </Col>
        <Col cssOverrides={col} md={12}>
            One of two columns
        </Col>
    </Row>
);
asChromaticStory(FourColsWithoutContainer);
