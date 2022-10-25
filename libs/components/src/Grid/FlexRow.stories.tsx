import { Fragment } from 'react';
import { css } from '@emotion/react';

import { Row } from './Row';
import { Col } from './Col';

export default {
    title: 'Layout/FlexRow',
    component: Row,
};

const col = css`
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    background-color: rgba(86, 61, 124, 0.15);
    border: 1px solid rgba(86, 61, 124, 0.2);
`;

export const WithThreeCols = () => (
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
);

export const WithTwoAndThreeCols = () => (
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
    </Fragment>
);

export const WithFourCols = () => (
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
);

export const WithRowsAndColumns = () => (
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
);

export const WithFourColsWithoutContainer = () => (
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
